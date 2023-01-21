import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import PrayerWallLayout from '~/layouts/prayer-wall/prayer-wall.layout';
import type { IRequest } from '~/types/global.definition';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.userKey, 'Expected user key');
	const requests = await fetchRequests({ userKey: params.userKey });

	return { requests };
};

const LocationPrayerWall = () => {
	const data = useLoaderData<{
		requests: IRequest[];
	}>();
	return <PrayerWallLayout requests={data.requests}></PrayerWallLayout>;
};

export default LocationPrayerWall;
