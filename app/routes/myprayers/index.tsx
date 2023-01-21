import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchLocations, fetchRequests } from '~/api/airTableApi';
import PrayerWallLayout from '~/layouts/prayer-wall/prayer-wall.layout';
import type { ILocation, IRequest } from '~/types/global.definition';

export const loader: LoaderFunction = async () => {
	const requests = await fetchRequests();
	const locations = await fetchLocations();

	return { requests, locations };
};

const PrayerWall = () => {
	const data = useLoaderData<{
		requests: IRequest[];
		locations: ILocation[];
	}>();
	return (
		<PrayerWallLayout
			requests={data.requests}
			locations={data.locations}
		></PrayerWallLayout>
	);
};

export default PrayerWall;
