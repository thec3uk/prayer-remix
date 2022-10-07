import { AddIcon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	Flex,
	useBreakpointValue,
	Drawer,
	useDisclosure,
	Button,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Filters from '~/components/Filters';
import type {
	IFilterOptions,
	IFiltersProps,
} from '~/components/Filters/Filters.definition';
import FiltersIcon from '~/components/FiltersIcon';
import Link from '~/components/Link';
import PrayerCard from '~/components/PrayerCard';
import type { IRequest } from '~/types/global.definition';
import type { IPrayerWallProps } from './prayer-wall.definition';

const PrayerWallLayout = ({ requests, locations }: IPrayerWallProps) => {
	const text = useBreakpointValue({
		base: 'Add a request',
		md: 'Add a prayer request',
	});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [filteredRequests, setFilteredRequests] =
		useState<IRequest[]>(requests);
	const [filters, setFilters] = useState<IFilterOptions>({
		location: 'all',
		type: 'both',
	});

	useEffect(() => {
		const reqs = requests.filter(
			r =>
				(r.location === filters.location ||
					filters.location === 'all') &&
				(r.type === filters.type || filters.type === 'both')
		);
		setFilteredRequests(reqs);
	}, [filters, requests]);

	const applyFilters = (opts: IFilterOptions) => {
		setFilters(opts);
	};

	const Shared = ({ initialFilters, onChange, locations }: IFiltersProps) => (
		<Filters
			initialFilters={initialFilters}
			onChange={onChange}
			locations={locations}
		/>
	);

	return (
		<Box px={{ base: 3, md: 4 }} minW={'60vw'}>
			<Heading
				as="h1"
				size={{ base: 'xl', md: '3xl' }}
				mb={{ base: 2, md: 4 }}
				textTransform="uppercase"
			>
				Prayer Wall
			</Heading>
			<Flex
				flexDir="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Flex display={{ base: 'block', md: 'none' }} flexDir="column">
					<FiltersIcon
						h={'23px'}
						w={'24px'}
						onClick={onOpen}
					></FiltersIcon>
					<Drawer isOpen={isOpen} onClose={onClose} placement="left">
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>Filters</DrawerHeader>
							<DrawerBody>
								<Shared
									initialFilters={filters}
									onChange={applyFilters}
									locations={locations}
								/>
							</DrawerBody>
							<DrawerFooter>
								<Button
									variant="outline"
									mr={3}
									onClick={() => {
										setFilters({
											location: 'all',
											type: 'both',
										});
									}}
								>
									Clear
								</Button>
								<Button onClick={onClose}>Close</Button>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</Flex>
				<Box display={{ base: 'none', md: 'flex' }}>
					<Shared
						initialFilters={filters}
						onChange={applyFilters}
						locations={locations}
					/>
				</Box>
				<Link
					href="/request"
					useButton={true}
					text={text}
					aria-label={text}
					buttonProps={{
						leftIcon: <AddIcon />,
						size: { base: 'xs', md: 'md' },
					}}
				/>
			</Flex>
			<Box
				my={6}
				w="100%"
				mx="auto"
				sx={{
					columnCount: [1, 1, 1, 2, 3],
					columnGap: 4,
				}}
			>
				{filteredRequests?.length > 0 ? (
					filteredRequests.map(request => (
						<PrayerCard
							data={request}
							key={request.id}
						></PrayerCard>
					))
				) : (
					<>
						<Text>No requests match your filter.</Text>
					</>
				)}
			</Box>
		</Box>
	);
};

export default PrayerWallLayout;
