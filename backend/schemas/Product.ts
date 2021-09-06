import { integer, select, text } from '@keystone-next/fields';
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
    status: select({
      isRequired: true,
      options: [
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'In progress', value: 'IN_PROGRESS' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      ui: {
        displayMode: 'segmented-control',
        // listView
      },
    }),
    price: integer(),
    // Todo: Add Photo field (relationship type => Photo schema)
  },
});
