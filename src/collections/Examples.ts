import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  upload: { staticURL: '/uploads', staticDir: '/uploads' },
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
  ],
}

export default Examples;