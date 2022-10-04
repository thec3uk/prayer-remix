import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import PrayerWallLayout from '~/layouts/prayer-wall/prayer-wall.layout';
import type { IRequest } from '~/types/global.definition';

export const loader: LoaderFunction = async () => {
	return await fetchRequests();
};

const PrayerWall = () => {
	const data = useLoaderData<IRequest[]>();
	return <PrayerWallLayout requests={data}></PrayerWallLayout>;
};

export default PrayerWall;
