import { Block } from 'payload/types';
import richText from '../fields/richText';

export const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'slider',
    plural: 'sliders',
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      minRows: 3,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
      {
        name: 'heading',
        type: 'text'
      },
      {
        name: 'altHeading',
        type: 'text'
      },
      {
        name: 'cta',
        type: 'text'
      },
      {
        name: 'destination',
        type: 'text'
      },
      {
      name: 'priority', // required
      type: 'number'
      },
       {
      name: 'minimumSubscriptionLevel', // required
      type: 'select', // required
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      
      options: [
        {
          label: 'Platinum',
          value: 'platinum',
        },
        {
          label: 'Free',
          value: 'free',
        },
        {
          label: 'CCM',
          value: 'ccm',
        },
        {
          label: 'Gold',
          value: 'gold',
        },
        {
          label: 'elite',
          value: 'Elite',
        },
      ],
    },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
        
      ],
    },
  ],
};

export default Slider;
