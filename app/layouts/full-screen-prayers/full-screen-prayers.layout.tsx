import { Box, Switch, useColorMode } from '@chakra-ui/react';
import PrayerCard from '~/components/PrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box>
			<Box overflow="visible">
				<Box
					mt={33}
					w="100%"
					sx={{
						columnCount: [1, 1, 1, 2, 3],
						columnGap: 4,
					}}
				>
					{requests.map(request => (
						<PrayerCard
							featureView
							data={request}
							key={request.id}
						></PrayerCard>
					))}
				</Box>
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
