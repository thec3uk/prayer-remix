import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import type { IRequest } from '~/types/global.definition';
import { useEffect, useState } from 'react';
import { Flex, Switch } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import MasonryGridItem from '~/components/FeaturePrayerCard/MasonryGridItem';
import PinnedRequests from '~/components/FeaturePrayerCard/PinnedRequests';
import {
	initialiseMasonry,
	masonryPrependElements,
	masonryRemoveElement,
} from './masonry';
import type Masonry from 'masonry-layout';

/* Default values to control timings and number so items displayed */
const AUTO_UPDATE_INTERVAL = 500;
const AUTO_UPDATE_REQUESTS = 3;
const DEFAULT_REQUESTS_DISPLAYED = 15;
const PINNED_REQUEST_LIMIT = 3;

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	/* Control the autoupdate */
	const [autoUpdate, setAutoUpdate] = useState<boolean>(true);
	const toggleAutoUpdate = () => setAutoUpdate(!autoUpdate);

	/* Used to show alert messages */
	const toast = useToast();

	/*
		If we are running in the browser, it's time to initialise masonry.
		(masonry use "window" which we cannot access server side)
	*/
	let masonry: Masonry;
	let gridElement: Element;
	if (typeof document !== 'undefined' && typeof window !== 'undefined') {
		let { msnry, grid } = initialiseMasonry();
		gridElement = grid;
		masonry = msnry;
	}

	/* 
		Buffer used to store elements in hidden display on load, these are "popped" 
		into the main display based on autoupdate properties.
	*/
	const [buffer] = useState<Array<IRequest>>(
		requests.slice(DEFAULT_REQUESTS_DISPLAYED)
	);

	const [pinnedRequests, setPinnedRequests] = useState<Array<IRequest>>([]);

	/* 
		If autoUpdate enabled and we have requests in buffer,
	    use masonry to prepend elements to grid 
	*/
	function addRequestsToGrid(countToAdd?: number) {
		if (buffer.length === 0) return;

		let x = 0;
		if (countToAdd) {
			x = countToAdd;
		} else if (autoUpdate) {
			x = AUTO_UPDATE_REQUESTS;
		}

		const requestsToAdd = selectNextRequestsFromBuffer(x);

		let elems: Element[] = [];
		requestsToAdd?.forEach(req => {
			const elem = document.querySelector(
				`.requestsBuffer .grid-item-${req.id}`
			);
			if (elem) elems.push(elem);
		});
		masonryPrependElements(masonry, gridElement, elems);
	}

	/*
		Select requests from buffer based on AUTO_UPDATE_REQUEST variable.
	*/
	function selectNextRequestsFromBuffer(countToAdd: number): IRequest[] {
		const requestsToDisplay: IRequest[] = [];
		for (let i = 1; i <= countToAdd; i++) {
			const request = buffer.pop();
			if (request) requestsToDisplay.push(request);
		}
		return requestsToDisplay;
	}

	useEffect(() => {
		addRequestsToGrid(15);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* 
		Run based on timer interval to populate grid with more requests 
	*/
	useEffect(() => {
		const interval = setInterval(() => {
			addRequestsToGrid();
		}, AUTO_UPDATE_INTERVAL);
		return () => {
			clearInterval(interval);
		};
	});

	const updatePinned = (request: IRequest, pinned: boolean) => {
		if (pinned && pinnedRequests?.length === PINNED_REQUEST_LIMIT) {
			toast({
				title: 'Max items pinned',
				description:
					'Only 3 requests can be pinned, please remove one then pin a new one.',
				status: 'warning',
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		const elem = document.querySelector(
			`${pinned ? '.grid' : '.pinned'} .grid-item-${request.id}`
		);
		if (!elem) return;

		const clickedRequest = requests.find(f => f.id === request.id);
		if (clickedRequest) {
			let newPinnedList: IRequest[] = [];
			if (pinned) {
				newPinnedList = [...pinnedRequests, clickedRequest];
			} else {
				newPinnedList = pinnedRequests.filter(f => f.id !== request.id);
			}
			setPinnedRequests(newPinnedList);
		}

		if (pinned) {
			masonryRemoveElement(masonry, elem);
		} else {
			buffer.push(request);
		}
	};

	return (
		<>
			<Flex mb={2} direction="row-reverse">
				<Switch onChange={toggleAutoUpdate}></Switch>
			</Flex>
			<PinnedRequests
				requests={pinnedRequests}
				updatePinned={updatePinned}
			></PinnedRequests>
			<div className="grid-container">
				<div className="grid">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
				</div>
			</div>
			<div className="requestsBuffer" style={{ display: 'none' }}>
				{requests.map(request => (
					<MasonryGridItem
						pinned={request.pinned}
						togglePin={(val: boolean) => updatePinned(request, val)}
						key={request.id}
						request={request}
					></MasonryGridItem>
				))}
			</div>
		</>
	);
};

export default FullScreenPrayerLayout;
