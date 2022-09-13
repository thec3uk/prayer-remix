import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import ListLayout from '~/layouts/list/list.layout';
import type { IRequest } from '~/types/global.definition';

export const loader: LoaderFunction = async () => {
	return await fetchRequests();
};

const PrayerListPage = () => {
	const data = useLoaderData<IRequest[]>();
	return <ListLayout requests={data}></ListLayout>;
};

export default PrayerListPage;
