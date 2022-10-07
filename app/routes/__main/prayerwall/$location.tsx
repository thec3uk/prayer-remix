import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchLocations, fetchRequests } from '~/api/airTableApi';
import PrayerWallLayout from '~/layouts/prayer-wall/prayer-wall.layout';
import type { ILocation, IRequest } from '~/types/global.definition';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.location, 'Expected params');
	const requests = await fetchRequests({ location: params.location });
	const locations = await fetchLocations();

	return { requests, locations };
};

const LocationPrayerWall = () => {
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

export default LocationPrayerWall;
