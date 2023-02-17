import dayjs from 'dayjs';
import type {
	IBibleVerse,
	IHomePageContent,
	ILocation,
	IRequest,
	IRequestForm,
	ISetting,
} from '~/types/global.definition';
import config from '../config.json';
import type { IRequestFilters } from './api.definition';
import { mapResponseToPrayerPraiseRequests } from './requestMapper';

const apiUrl = (tableName: string) =>
	`${config.airTableUrl}/v0/${config.airTableBase}/${tableName}`;

export async function fetchRequests({
	location,
}: IRequestFilters = {}): Promise<IRequest[]> {
	console.log(location);
	const tableName = 'Prayer%2FPraise%20Requests';
	const filterArchivedAndFlagged =
		'NOT(%7BArchived%7D)%2C+NOT(%7BFlagged%7D)';
	const locationFilter = `SEARCH(LOWER(%22${location}%22)%2C+LOWER(%7BLocation%7D))%2C+`;
	const filter = `&filterByFormula=AND(${
		location ? locationFilter : ''
	}${filterArchivedAndFlagged})`;
	const res = await fetch(
		`${apiUrl(
			tableName
		)}?view=Raw%20Submitted%20Requests&sort%5B0%5D%5Bdirection%5D=desc&sort%5B0%5D%5Bfield%5D=created_at&archived=false${filter}`,
		{
			headers: new Headers({
				Authorization: `Bearer ${config.apiKey}`,
			}),
		}
	);
	const response = await res.json();
	return mapResponseToPrayerPraiseRequests(response);
}

export async function fetchSettings(): Promise<ISetting[]> {
	const tableName = 'Settings';
	const res = await fetch(`${apiUrl(tableName)}`, {
		headers: new Headers({
			Authorization: `Bearer ${config.apiKey}`,
		}),
	});
	const settings = await res.json();
	return settings.records.map((setting: any) => ({
		enabled: setting.fields.Enabled,
		text: setting.fields['Button Text'],
		name: setting.fields['name'],
	}));
}

export async function fetchVerses(): Promise<IBibleVerse[]> {
	const tableName = 'Prayer Inspiration';
	const res = await fetch(`${apiUrl(tableName)}`, {
		headers: new Headers({
			Authorization: `Bearer ${config.apiKey}`,
		}),
	});
	const verses = await res.json();
	return verses.records.map((verse: any) => ({
		verse: verse.fields.Verse,
		content: verse.fields.Content,
	}));
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
		Location: [request?.location],
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

export async function fetchLocations(): Promise<ILocation[]> {
	const tableName = 'Locations';
	const res = await fetch(`${apiUrl(tableName)}`, {
		headers: new Headers({
			Authorization: `Bearer ${config.apiKey}`,
		}),
	});
	const locations = await res.json();
	if (!locations.records) return [];
	return locations.records.map(
		(location: { id: string; fields: { Name: string } }) => ({
			name: location.fields.Name,
			id: location.id,
		})
	);
}

export async function flagRequest(id: string): Promise<boolean> {
	const base = getBase();

	base('Prayer/Praise Requests').update(
		id,
		{
			Flagged: true,
		},

		function (err: any) {
			if (err) {
				console.error(err);
				return false;
			}
		}
	);

	return true;
}

export async function fetchHomePageContent(): Promise<IHomePageContent> {
	const tableName = 'Home Page Content';
	const res = await fetch(`${apiUrl(tableName)}`, {
		headers: new Headers({
			Authorization: `Bearer ${config.apiKey}`,
		}),
	});
	const content = await res.json();
	const keyValuePairs: KeyValuePair[] = content.records.map(
		(record: { fields: KeyValuePair[] }) => {
			return record.fields;
		}
	);
	return {
		subTitle: getValue(keyValuePairs, 'page_subtitle'),
		card: {
			title: getValue(keyValuePairs, 'card_title'),
			subTitle: getValue(keyValuePairs, 'card_subtitle'),
			href: getValue(keyValuePairs, 'card_link'),
			text: getValue(keyValuePairs, 'card_description'),
			img: '',
		},
	};
}

type KeyValuePair = { key: string; value: string };

function getValue(
	values: KeyValuePair[],
	key: string,
	defaultVal: string = ''
) {
	return values.find(f => f.key === key)?.value || defaultVal;
}
