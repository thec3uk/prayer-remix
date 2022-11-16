import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import type { IRequest } from '~/types/global.definition';
import FullScreenPrayerLayout from '~/layouts/full-screen-prayers/full-screen-prayers.layout';

export const loader: LoaderFunction = async () => {
	const requests = await fetchRequests({ maxRecords: '1000' });
	return { requests };
};

const PrayerWall = () => {
	const { requests } = useLoaderData<{
		requests: IRequest[];
	}>();

	return <FullScreenPrayerLayout requests={requests} />;
};

export default PrayerWall;
