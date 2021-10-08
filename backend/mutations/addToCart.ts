/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';
import { CartItemCreateInput } from '../.keystone/schema-types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  const user = context.session as Session;
  if (!user.itemId) {
    throw new Error('You must be signed in!');
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: user.itemId }, product: { id: productId } },
    resolveField: 'id, quantity',
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: {
        quantity: existingCartItem.quantity + 1,
      },
    });
  }

  return await context.lists.CartItem.createOne({
      data: {
          product: {connect: {id: productId}},
          user: {connect: {id: user.itemId}}
      }
  })
}

export default addToCart