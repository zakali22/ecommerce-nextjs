import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      isRequired: true,
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      isRequired: true,
      options: [
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'In progress', value: 'IN_PROGRESS' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'IN_PROGRESS',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    price: integer(),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'photo', 'description', 'status', 'price'],
    },
  },
});
