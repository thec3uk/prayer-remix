import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import type { IRequest } from '~/types/global.definition';
import invariant from 'tiny-invariant';
import FullScreenPrayerLayout from '~/layouts/full-screen-prayers/full-screen-prayers.layout';

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.location, 'Expected params');
	const requests = await fetchRequests({ location: params.location });
	return { requests };
};

const PrayerWall = () => {
	const { requests } = useLoaderData<{
		requests: IRequest[];
	}>();
	return <FullScreenPrayerLayout requests={requests} />;
};

export default PrayerWall;
