import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchLocations } from '~/api/airTableApi';
import RequestLayout from '~/layouts/request/request.layout';
import type { ILocation } from '~/types/global.definition';

export const loader: LoaderFunction = async () => {
	return await fetchLocations();
};

const PrayerRequestPage = () => {
	const locations = useLoaderData<ILocation[]>();
	return <RequestLayout locations={locations}></RequestLayout>;
};

export default PrayerRequestPage;
