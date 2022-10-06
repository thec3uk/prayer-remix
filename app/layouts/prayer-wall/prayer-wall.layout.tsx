import { AddIcon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	Flex,
	Select,
	useBreakpointValue,
	createIcon,
	VStack,
	Drawer,
	useDisclosure,
	Button,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	RadioGroup,
	Radio,
	Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import Link from '~/components/Link';
import PrayerCard from '~/components/PrayerCard';
import type { ILocation } from '~/types/global.definition';
import type { IPrayerWallProps } from './prayer-wall.definition';

// using `path`
export const FiltersIcon = createIcon({
	displayName: 'FiltersIcon',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<line
				x1="1.5"
				y1="4.14254"
				x2="22.5"
				y2="4.14254"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="1.5"
				y1="12.4904"
				x2="22.5"
				y2="12.4904"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="1.5"
				y1="21.4128"
				x2="22.5"
				y2="21.4128"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M17.5 2L17.5 6.01514"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M6.5 10.4998L6.5 14.4998"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="12.5"
				y1="19.4998"
				x2="12.5"
				y2="23.4998"
				stroke="#3E4545"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</>
	),
});

interface IFiltersProps {
	locations: ILocation[];
}
function Filters({ locations }: IFiltersProps) {
	return (
		<>
			<Select>
				<option key="all" value="all">
					All Locations
				</option>
				{locations.map(l => (
					<option key={l.name} value={l.name}>
						{l.name}
					</option>
				))}
			</Select>
			<RadioGroup>
				<Stack direction="row">
					<Radio value={'true'}>Prayer</Radio>
					<Radio value={'false'}>Prayer</Radio>
				</Stack>
			</RadioGroup>
		</>
	);
}

const PrayerWallLayout = ({ requests, locations }: IPrayerWallProps) => {
	const text = useBreakpointValue({
		base: 'Add a request',
		md: 'Add a prayer request',
	});
	// const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={{ base: 3, md: 4 }}>
			<Heading
				as="h1"
				size={{ base: 'xl', md: '3xl' }}
				mb={{ base: 2, md: 4 }}
				textTransform="uppercase"
			>
				Prayer Wall
			</Heading>
			<Flex
				// flexDir="row"
				// justifyContent="space-between"
				// alignItems={'center'}
				flexDir="column"
				alignItems="flex-end"
			>
				{/* <Flex
						display={{ base: 'block', md: 'none' }}
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
									<Stack gap={2}>
										<Filters locations={locations} />
									</Stack>
								</DrawerBody>
								<DrawerFooter>
									<Button
										variant="outline"
										mr={3}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button onClick={onClose}>Apply</Button>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>
					</Flex>
					<Flex
						display={{ base: 'none', md: 'flex' }}
						gap={6}
						alignItems="baseline"
					>
						<Filters locations={locations} />
					</Flex> */}
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
				{requests.map(request => (
					<PrayerCard data={request} key={request.id}></PrayerCard>
				))}
			</Box>
		</Box>
	);
};

export default PrayerWallLayout;
