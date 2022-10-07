import dayjs from 'dayjs';
import type { IRequest } from '~/types/global.definition';

// TODO: strongly type the air table response
// The filter should be server side but Air Table is a bit of a nightmare
export function mapResponseToPrayerPraiseRequests(
	airTableRecords: any,
	location: string = ''
): IRequest[] {
	let requests = airTableRecords.records;
	if (location !== '') {
		console.log(location);
		requests = requests.filter(
			(r: any) =>
				location.toLowerCase() ===
				r.fields['Name (from Location)']?.[0]?.toLowerCase()
		);
	}
	return requests.map((r: any) => {
		return {
			name: r.fields.name,
			prayer: r.fields.prayer,
			type: r.fields.type,
			title: r.fields.title,
			id: r.id,
			created_at: dayjs(r.fields.created_at).format('ddd DD MMM YYYY'),
			count: r.fields['Prayer Count'] || 0,
			location: r.fields['Name (from Location)']?.[0] || '',
		};
	});
}
