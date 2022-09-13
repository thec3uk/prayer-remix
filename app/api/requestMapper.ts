import dayjs from 'dayjs';
import type { IRequest } from '~/types/global.definition';

// TODO: strongly type the air table response
export function mapResponseToPrayerPraiseRequests(
	airTableRecords: any
): IRequest[] {
	return airTableRecords.records.map((r: any) => {
		return {
			name: r.fields.name,
			prayer: r.fields.prayer,
			type: r.fields.type,
			title: r.fields.title,
			id: r.id,
			created_at: dayjs(r.createdTime).format('ddd DD MMM YYYY'),
			count: r.fields['Prayer Count'] || 0,
		};
	});
}
