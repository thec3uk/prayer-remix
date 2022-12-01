import { Box, SimpleGrid, Switch, useColorMode } from '@chakra-ui/react';
import PrayerCard from '~/components/PrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box>
			<Box overflow="visible">
				<SimpleGrid mt={33} minChildWidth={'400px'} spacing={6} mb={4}>
					{requests.map(request => (
						<PrayerCard
							featureView
							data={request}
							key={request.id}
						></PrayerCard>
					))}
				</SimpleGrid>
			</Box>
			<Box my={5} display={'flex'} flexDirection={'row-reverse'}>
				<Switch
					id="theme-switch"
					size="sm"
					onChange={toggleColorMode}
				/>
			</Box>
		</Box>
	);
};

export default FullScreenPrayerLayout;
