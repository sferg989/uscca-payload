import { CollectionConfig } from 'payload/types';

const DashboardSliderCards: CollectionConfig = {
	// the slug is used for naming the collection in the database and the APIs that are open. For example: api/posts/${id}
	slug: 'dashboard-slider-cards',
	admin: {
		// this is the name of a field which will be visible for the edit screen and is also used for relationship fields
		useAsTitle: 'name',
		// defaultColumns is used on the listing screen in the admin UI for the collection
		defaultColumns: ['title', 'slider-cards', 'publishDate', 'status'],
		group: 'Content'
	},
	access: {
		read: ({ req: { user } }) => {
			return true;
		}
	},
	// versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
	versions: {
		drafts: true
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			label: 'Name'
		},
		{
			name: 'slides',
			type: 'array',
			minRows: 3,
			labels: {
				singular: 'Slide',
				plural: 'Slides'
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
					name: 'minimumSubscriptionLevel', // required
					type: 'select', // required
					admin: {
						isClearable: true,
						isSortable: true // use mouse to drag and drop different values, and sort them according to your choice
					},

					options: [
						{
							label: 'Platinum',
							value: 'platinum'
						},
						{
							label: 'Free',
							value: 'free'
						},
						{
							label: 'CCM',
							value: 'ccm'
						},
						{
							label: 'Gold',
							value: 'gold'
						},
						{
							label: 'elite',
							value: 'Elite'
						}
					]
				},
				{
					name: 'media',
					type: 'upload',
					relationTo: 'media',
					required: true,
					admin: {
						description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.'
					}
				}
			]
		}
	]
};

export default DashboardSliderCards;
