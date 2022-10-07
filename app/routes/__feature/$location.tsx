import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import type { IRequest } from '~/types/global.definition';
import { Box } from '@chakra-ui/react';
import PrayerCard from '~/components/PrayerCard';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.location, 'Expected params');
	const requests = await fetchRequests({ location: params.location });
	return { requests };
};

const PrayerWall = () => {
	const data = useLoaderData<{
		requests: IRequest[];
	}>();
	return (
		<Box
			my={6}
			w="100%"
			mx="auto"
			sx={{
				columnCount: [1, 1, 1, 2, 3],
				columnGap: 4,
			}}
		>
			{data.requests.map(request => (
				<PrayerCard data={request} key={request.id}></PrayerCard>
			))}
		</Box>
	);
};

export default PrayerWall;
