import { CollectionConfig } from 'payload/types';
import Slider from '../blocks/Slider';

const DashboardSliderCards: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/posts/${id}
  slug: 'dashboard-slider-cards',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: [
      'title',
      'slider-cards',
      'publishDate',
      'status'
    ],
    group: 'Content'
  },
  access: {
    read: ({ req: { user } }) => {
      return true;

      // users who are authenticated will see all posts
      if (user) {
        return true;
      }

      // query publishDate to control when posts are visible to guests
      return {
        and: [
          {
            publishDate: {
              less_than: new Date().toJSON(),
            },
            _status: {
              equals: 'published',
            },
          },
        ],
      };
    },
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      // localized fields are stored as keyed objects to represent each locale listed in the payload.config.ts. For example: { en: 'English', es: 'Espanol', ...etc }
      localized: true,
    },
    {
      name: 'slider-cards',
      label: 'Slider Cards',
      type: 'blocks',
      minRows: 1,
      maxRows: 1,
      // the blocks are reusable objects that will be added in array to the document, these are especially useful for structuring content purpose built for frontend componentry
      blocks: [
        Slider
      ],
    },
    
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => (new Date()),
    },
  ],
}

export default DashboardSliderCards;
