import qs from 'qs';
import payload from 'payload';

const query = {
	_status: {
		equals: 'published'
	}
	// This query could be much more complex
	// and QS would handle it beautifully
};

export const getSliders = async () => {
	const posts = await payload.find({
		collection: 'myuscca-slider-cards',
		sort: '-publishDate',
		limit: 1,
		where: {
			_status: {
				equals: 'published'
			}
		}
	});

	return posts;
};
