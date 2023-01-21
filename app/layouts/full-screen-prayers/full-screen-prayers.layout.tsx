import {
	Box,
	Switch,
	useColorMode,
	useSafeLayoutEffect,
} from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import mas from 'masonry-layout';

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const { toggleColorMode } = useColorMode();
	var grid = document.querySelector('.masonry-grid') as HTMLElement;
	var msnry = new mas(grid, {
		// options...
		itemSelector: '.grid-item',
		columnWidth: 200,
		horizontalOrder: true,
		transitionDuration: '1s',
	});

	msnry.return(
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
