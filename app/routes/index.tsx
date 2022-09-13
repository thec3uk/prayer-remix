import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchRequests } from '~/api/airTableApi';
import HomeLayout from '~/layouts/home/home.layout';

export const loader: LoaderFunction = async () => {
	return await fetchRequests();
};

export default function Index() {
	const requests = useLoaderData();
	return <HomeLayout data={requests} />;
}
