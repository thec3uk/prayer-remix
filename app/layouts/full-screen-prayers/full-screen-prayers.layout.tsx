import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import Masonry from 'masonry-layout';
import type { IRequest } from '~/types/global.definition';
import { useEffect, useState } from 'react';
import { Box, Flex, Switch, Text } from '@chakra-ui/react';

const GridItem = ({ request }: { request: IRequest }) => (
	<div className={`grid-item grid-item-${request.id}`} key={request.id}>
		<FeaturePrayerCard data={request}></FeaturePrayerCard>
	</div>
);

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	const initialLastDisplayedIdx = 14;
	let msnry: any;
	let grid: any;
	if (typeof document !== 'undefined') {
		grid = document.querySelector('.grid') as HTMLElement;
		msnry = new Masonry(grid, {
			// options...
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			horizontalOrder: true,
			transitionDuration: '0.8s',
			gutter: '.gutter-sizer',
			stamp: '.stamp',
		});
		msnry.layout();
	}
	const [lastDisplayed, setLastDisplayed] = useState<number>(
		initialLastDisplayedIdx
	);
	const [autoUpdate, setAutoupdate] = useState<boolean>(false);
	const toggleAutoPlay = () => {
		setAutoupdate(!autoUpdate);
		msnry.layout();
	};

	useEffect(() => {
		if (initialLastDisplayedIdx !== lastDisplayed) {
			let elems: HTMLElement[] = [];
			for (let i = 1; i < 4; i++) {
				const elem = document.querySelector(
					`.grid-item-${requests[lastDisplayed + i].id}`
				) as HTMLElement;
				grid.prepend(elem);
				elems.push(elem);
			}
			msnry.prepended(elems);
			msnry.layout();
		}
	}, [grid, lastDisplayed, msnry, requests]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoUpdate && lastDisplayed < requests.length) {
				setLastDisplayed(lastDisplayed + 3);
			}
		}, 7500);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<>
			<Flex mb={2} direction="row-reverse">
				<Switch onChange={toggleAutoPlay}></Switch>
			</Flex>
			<div className="grid-container">
				<div className="grid">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
					{requests.slice(0, 15).map(request => (
						<GridItem key={request.id} request={request}></GridItem>
					))}
				</div>
			</div>

			<div className="shadowRequest" style={{ display: 'none' }}>
				{requests.map(request => (
					<GridItem key={request.id} request={request}></GridItem>
				))}
			</div>
		</>
	);
};

export default FullScreenPrayerLayout;
