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
	useToast,
	Grid,
	SimpleGrid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { flagRequest, incrementPrayerCount } from '~/api/airTableApi';
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

const makeToast = (
	title: string,
	description: string,
	status: 'success' | 'error'
) => ({
	title,
	description,
	status,
	duration: 10000,
	isClosable: true,
});

const PrayerWallLayout = ({ requests, locations }: IPrayerWallProps) => {
	const toast = useToast();

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

	const amen = async (id: string, count: number) => {
		await incrementPrayerCount(id, count);
	};

	const report = async (id: string) => {
		const resp = await flagRequest(id);
		if (resp) {
			toast(
				makeToast(
					'Thank you',
					'We have flagged the request and will review shortly.',
					'success'
				)
			);
		} else {
			toast(
				makeToast(
					'Sorry',
					'Something went wrong, please try again or contact us.',
					'error'
				)
			);
		}
	};

	return (
		<Box px={{ base: 3, md: 4 }} minH={'75vh'}>
			<Heading
				as="h1"
				size="2xl"
				mb={{ base: 6, md: 8 }}
				textTransform="uppercase"
			>
				Prayer Wall
			</Heading>
			{locations && (
				<Flex
					flexDir="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Flex
						display={{ base: 'block', lg: 'none' }}
						flexDir="column"
					>
						<FiltersIcon
							h={'23px'}
							w={'24px'}
							onClick={onOpen}
						></FiltersIcon>
						<Drawer
							isOpen={isOpen}
							onClose={onClose}
							placement="left"
						>
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
					<Box display={{ base: 'none', lg: 'flex' }}>
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
			)}
			<SimpleGrid minChildWidth={'400px'} spacing={6} my={4}>
				{filteredRequests?.length > 0 ? (
					filteredRequests.map(request => (
						<PrayerCard
							data={request}
							key={request.id}
							onAmen={amen}
							onReport={report}
						></PrayerCard>
					))
				) : (
					<>
						<Text>No requests match your filter.</Text>
					</>
				)}
			</SimpleGrid>
		</Box>
	);
};

export default PrayerWallLayout;
