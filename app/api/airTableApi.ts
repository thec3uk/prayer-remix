import dayjs from 'dayjs';
import type {
	IRequest,
	IRequestForm,
	ISettings,
} from '~/types/global.definition';
import config from '../config.json';
import { mapResponseToPrayerPraiseRequests } from './requestMapper';

const apiUrl = (tableName: string) =>
	`${config.airTableUrl}/v0/${config.airTableBase}/${tableName}`;

export async function fetchRequests(): Promise<IRequest[]> {
	const tableName = 'Prayer%2FPraise%20Requests';
	const res = await fetch(
		`${apiUrl(tableName)}?maxRecords=100&view=Raw%20Submitted%20Requests`,
		{
			headers: new Headers({
				Authorization: `Bearer ${config.apiKey}`,
			}),
		}
	);
	const response = await res.json();
	return mapResponseToPrayerPraiseRequests(response);
}

export async function fetchSettings(): Promise<ISettings> {
	const tableName = 'Settings';
	const res = await fetch(`${apiUrl(tableName)}/rec1fSqbN4koqpktH`, {
		headers: new Headers({
			Authorization: `Bearer ${config.apiKey}`,
		}),
	});
	const setting = await res.json();
	return {
		groupCallEnabled: setting.fields.Enabled,
		buttonText: setting.fields['Button Text'],
	};
}

export async function submitRequest(request: IRequestForm): Promise<any> {
	if (!request) {
		return false;
	}
	const base = getBase();

	return await base('Prayer/Praise Requests').create({
		title: request?.title,
		type: request.type,
		name: request?.name,
		prayer: request?.prayer,
		created_at: dayjs(),
		'Prayer Count': 0,
	});
}

function getBase(): any {
	// move this to a constructor?
	var Airtable = require('airtable');
	return new Airtable({ apiKey: config.apiKey }).base(config.airTableBase);
}

export async function incrementPrayerCount(
	id: string,
	currentCount: number
): Promise<number> {
	const base = getBase();
	const updatedCount = currentCount + 1;

	base('Prayer/Praise Requests').update(
		id,
		{
			'Prayer Count': updatedCount,
		},

		function (err: any) {
			if (err) {
				console.error(err);
				return currentCount;
			}
		}
	);
	return updatedCount;
}
