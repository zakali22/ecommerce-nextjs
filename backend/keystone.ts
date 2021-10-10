/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { CartItem } from './schemas/CartItem';
import { Order } from './schemas/Order';
import { OrderItem } from './schemas/OrderItem';
import { insertSeedData } from './seed-data';
import { sendPasswordEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';

const databaseUrl = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long the session should last
  secret: process.env.COOKIE_SECRET,
};

// Define auth settings
const { withAuth } = createAuth({
  listKey: 'User', // The administrator schema
  identityField: 'email', // How to identify the User
  secretField: 'password',
  initFirstItem: {
    // When no User exists, request registration
    fields: ['name', 'email', 'password'],
    // Define the roles for the User
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordEmail(args.token, args.identity);
      console.log(args);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
      async onConnect(keystone) {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    extendGraphqlSchema,
    lists: createSchema({
      // List of schema goes here
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
    }),
    ui: {
      // Access to the Keystone dashboard for DB management
      // Only gives access to the User with a session
      isAccessAllowed: ({ session }) => !!session?.data, // Return true if session exists (!! to convert into boolean)
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email', // From each session get the id, name, email
    }),
  })
);
