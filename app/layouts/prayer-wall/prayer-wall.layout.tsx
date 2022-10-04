import { Box, VStack } from '@chakra-ui/react';
import PrayerCard from '~/components/PrayerCard';
import type { IPrayerWallProps } from './prayer-wall.definition';

const PrayerWallLayout = ({ requests }: IPrayerWallProps) => {
	return (
		<VStack spacing={5} as="main">
			<Box
				padding={5}
				w="100%"
				mx="auto"
				sx={{ columnCount: [1, 2, 3], columnGap: '1rem' }}
			>
				{requests.map(request => (
					<PrayerCard data={request} key={request.id}></PrayerCard>
				))}
			</Box>
		</VStack>
	);
};

export default PrayerWallLayout;
