import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import Masonry from 'masonry-layout';
import type { IRequest } from '~/types/global.definition';
import { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Switch } from '@chakra-ui/react';

const GridItem = ({
	request,
	pinned,
	togglePin,
}: {
	request: IRequest;
	pinned: boolean;
	togglePin: (val: boolean) => void;
}) => (
	<div
		className={!pinned ? `grid-item grid-item-${request.id}` : ''}
		key={request.id}
	>
		<FeaturePrayerCard
			pinned={pinned}
			data={request}
			togglePin={togglePin}
		></FeaturePrayerCard>
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
			fitWidth: true,
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
	const [allRequests, setAllRequests] = useState(requests);

	useEffect(() => {
		if (initialLastDisplayedIdx !== lastDisplayed) {
			let elems: HTMLElement[] = [];
			for (let i = 1; i < 4; i++) {
				const elem = document.querySelector(
					`.grid-item-${allRequests[lastDisplayed + i].id}`
				) as HTMLElement;
				grid.prepend(elem);
				elems.push(elem);
			}
			msnry.prepended(elems);
			msnry.layout();
		}
	}, [grid, lastDisplayed, msnry, allRequests]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoUpdate && lastDisplayed < allRequests.length) {
				setLastDisplayed(lastDisplayed + 3);
			}
		}, 7500);
		return () => {
			clearInterval(interval);
		};
	});
	const updatePinned = (request: IRequest, pinned: boolean) => {
		if (allRequests.filter(f => f.pinned)?.length < 3) {
			const newItems = allRequests.filter(f => f.id !== request.id);
			setAllRequests([...newItems, { ...request, pinned: pinned }]);
			msnry.layout();
			msnry.reloadItems();
		} else {
			alert('Max 3 items pinned');
		}
	};

	return (
		<>
			<Flex mb={2} direction="row-reverse">
				<Switch onChange={toggleAutoPlay}></Switch>
			</Flex>
			<SimpleGrid columns={3} gap={6} mb={2} mt={33} w="100%">
				{allRequests
					?.filter(f => f.pinned)
					.map(request => (
						<GridItem
							pinned
							key={request.id}
							request={request}
							togglePin={(val: boolean) =>
								updatePinned(request, val)
							}
						></GridItem>
					))}
			</SimpleGrid>
			<div className="grid-container">
				<div className="grid">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
					{allRequests
						.filter(f => !f.pinned)
						.slice(0, 15)
						.map(request => (
							<GridItem
								key={request.id}
								request={request}
								pinned={false}
								togglePin={(val: boolean) =>
									updatePinned(request, val)
								}
							></GridItem>
						))}
				</div>
			</div>

			<div className="shadowRequest" style={{ display: 'none' }}>
				{allRequests.map(request => (
					<GridItem
						key={request.id}
						request={request}
						pinned={false}
						togglePin={(val: boolean) => updatePinned(request, val)}
					></GridItem>
				))}
			</div>
		</>
	);
};

export default FullScreenPrayerLayout;
