import { CollectionConfig } from 'payload/types';
import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    description: 'Uploads are set to read-only for this demo.',
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
  // file uploads are stored on the server by default, plugins are available for cloud storage
  // https://github.com/richardvanbergen/payload-plugin-cloud-storage as an example
  upload: {

    // from the imageSizes below, the admin UI will show this size for previewing
    adminThumbnail: 'thumbnail',

    // staticDir tell Payload where to store files to and allows them to be served
    staticURL: '/uploads', 
    staticDir: '/uploads',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
      }
    ],
  },
  // upload collections inherit base fields for file information and imageSizes, then add your own for users to change
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      localized: true,
      type: 'text',
      required: true,
    },
  ],
};

export default Media;
