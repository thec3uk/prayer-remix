import { AddIcon } from '@chakra-ui/icons';
import { Box, Heading, Link, Button, Flex, Select } from '@chakra-ui/react';
import { Link as RemixLink } from '@remix-run/react';
import PrayerCard from '~/components/PrayerCard';
import type { IPrayerWallProps } from './prayer-wall.definition';

const PrayerWallLayout = ({ requests }: IPrayerWallProps) => {
	return (
		<>
			<Flex as="main" flexDir="column">
				<Heading
					as="h1"
					size={{ base: 'md', md: '3xl' }}
					mb={{ base: 2, md: 4 }}
					textTransform="uppercase"
				>
					Prayer Wall
				</Heading>
				<Flex flexDir="row" justifyContent="space-between">
					<Select w="sm">
						<option>All Locations</option>
					</Select>
					<Link as={RemixLink} to="/request">
						<Button
							size={'sm'}
							leftIcon={<AddIcon />}
							aria-label={'Add a new prayer request'}
						>
							Add a new prayer request
						</Button>
					</Link>
				</Flex>
				<Box
					my={6}
					w="100%"
					mx="auto"
					sx={{
						columnCount: [1, 2, 3],
						columnGap: 4,
					}}
				>
					{requests.map(request => (
						<PrayerCard
							data={request}
							key={request.id}
						></PrayerCard>
					))}
				</Box>
			</Flex>
		</>
	);
};

export default PrayerWallLayout;
