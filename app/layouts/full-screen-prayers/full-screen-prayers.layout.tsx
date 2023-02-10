/* eslint-disable react-hooks/exhaustive-deps */
import type { IFullScreenPrayersProps } from './full-screen-prayers.definition';
import type { IRequest } from '~/types/global.definition';
import { useEffect, useState } from 'react';
import { Flex, Switch } from '@chakra-ui/react';
import MasonryGridItem from '~/components/FeaturePrayerCard/MasonryGridItem';
import { initialiseMasonry, masonryPrependElements } from './masonry';
import type Masonry from 'masonry-layout';

/* Default values to control timings and number so items displayed */
const AUTO_UPDATE_INTERVAL = 7500;
const AUTO_UPDATE_REQUESTS = 3;
const DEFAULT_REQUESTS_DISPLAYED = 15;

const FullScreenPrayerLayout = ({ requests }: IFullScreenPrayersProps) => {
	/* Control the autoupdate */
	const [autoUpdate, setAutoUpdate] = useState<boolean>(false);
	const toggleAutoUpdate = () => setAutoUpdate(!autoUpdate);

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
	const [buffer] = useState<Array<IRequest>>([...requests]);

	/* 
		If autoUpdate enabled and we have requests in buffer,
	    use masonry to prepend elements to grid 
	*/
	function addRequestsToGrid(countToAdd?: number) {
		if (buffer.length === 0) return;
		const x = countToAdd
			? countToAdd
			: autoUpdate
			? AUTO_UPDATE_REQUESTS
			: 0;

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
			const request = buffer.shift();
			if (request) requestsToDisplay.push(request);
		}
		return requestsToDisplay;
	}

	/*
		An initial population of 15 requests
	*/
	useEffect(() => {
		addRequestsToGrid(DEFAULT_REQUESTS_DISPLAYED);
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

	return (
		<>
			<Flex mb={33} direction="row-reverse">
				<Switch onChange={toggleAutoUpdate}></Switch>
			</Flex>
			<div className="grid-container">
				<div className="grid">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
				</div>
			</div>
			<div className="requestsBuffer" style={{ display: 'none' }}>
				{requests.map(request => (
					<MasonryGridItem
						key={request.id}
						request={request}
					></MasonryGridItem>
				))}
			</div>
		</>
	);
};

export default FullScreenPrayerLayout;
