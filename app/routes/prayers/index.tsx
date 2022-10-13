import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { fetchRequests } from '~/api/airTableApi';
import type { IRequest } from '~/types/global.definition';
import { Box } from '@chakra-ui/react';
import PrayerCard from '~/components/PrayerCard';

export const loader: LoaderFunction = async () => {
	console.log('load');
	const requests = await fetchRequests();
	return { requests };
};

const PrayerWall = () => {
	const data = useLoaderData<{
		requests: IRequest[];
	}>();
	return (
		<Box h={'90vh'}>
			<Box
				mt={33}
				w="100%"
				sx={{
					columnCount: [1, 1, 1, 2, 3],
					columnGap: 4,
				}}
			>
				{data.requests.map(request => (
					<PrayerCard
						featureView
						data={request}
						key={request.id}
					></PrayerCard>
				))}
			</Box>
		</Box>
	);
};

export default PrayerWall;
