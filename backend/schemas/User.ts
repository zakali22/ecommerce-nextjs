import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // access
  // ui
  // TODO: Add roles, carts and orders (relationships to other schemas)
  fields: {
    name: text({
      isRequired: true,
      isIndexed: true,
    }),
    email: text({
      isRequired: true,
      isUnique: true,
    }),
    password: password(),
    cart: relationship({ ref: 'CartItem.user' }),
  },
});
