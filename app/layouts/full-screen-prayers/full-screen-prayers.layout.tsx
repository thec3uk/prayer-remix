import FeaturePrayerCard from '~/components/FeaturePrayerCard';
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import type { IRequest } from '~/types/global.definition';
import { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Switch } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

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
	if (typeof document !== 'undefined' && typeof window !== 'undefined') {
		grid = document.querySelector('.grid') as HTMLElement;
		msnry = new window.Masonry(grid, {
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
	const toast = useToast();

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
		if (pinned && allRequests.filter(f => f.pinned)?.length >= 3) {
			toast({
				title: 'Max items pinned',
				description:
					'Only 3 requests can be pinned, please remove one then pin a new one.',
				status: 'warning',
				duration: 3000,
				isClosable: true,
			});
		}

		const newItems = allRequests.filter(f => f.id !== request.id);
		setAllRequests([...newItems, { ...request, pinned: pinned }]);

		let elems: HTMLElement[] = [];
		for (let i = 1; i < (pinned ? 1 : 2); i++) {
			const elem = document.querySelector(
				`.grid-item-${allRequests[lastDisplayed + i].id}`
			) as HTMLElement;
			grid.prepend(elem);
			elems.push(elem);
		}
		msnry.prepended(elems);
		msnry.layout();
		setLastDisplayed(lastDisplayed + (pinned ? 1 : 2));
	};

	return (
		<>
			<Flex mb={2} direction="row-reverse">
				<Switch onChange={toggleAutoPlay}></Switch>
			</Flex>
			<SimpleGrid
				columns={3}
				gap={6}
				mb={2}
				mt={33}
				w="100%"
				alignItems={'flex-start'}
			>
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
