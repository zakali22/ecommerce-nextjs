import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';

const databaseUrl = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long the session should last
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
  },
  lists: createSchema({
    // List of schema goes here
    User,
  }),
  ui: {
    // Access to the Keystone dashboard for DB management
    // Change based on roles
    isAccessAllowed: () => true,
  },
  // Add session values here
});
