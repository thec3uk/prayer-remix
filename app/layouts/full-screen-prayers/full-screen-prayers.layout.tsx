import { Box, SimpleGrid, Switch, useColorMode } from '@chakra-ui/react';
import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box>
			<Box overflow="visible">
				<SimpleGrid mt={33} minChildWidth={'400px'} spacing={4} mb={4}>
					{requests.map(request => (
						<FeaturePrayerCard
							data={request}
							key={request.id}
						></FeaturePrayerCard>
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
