import { Box, Switch, useColorMode } from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box mt={33}>
			<Box overflow="visible">
				<Masonry
					breakpointCols={3}
					className="masonry-grid"
					columnClassName="masonry-grid_column"
				>
					{requests.map(request => (
						<FeaturePrayerCard
							data={request}
							key={request.id}
						></FeaturePrayerCard>
					))}
				</Masonry>
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
