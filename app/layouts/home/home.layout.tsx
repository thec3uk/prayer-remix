import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import type { IPrayerRoomProps } from './home.definition';

const HomeLayout = ({ data: requests }: IPrayerRoomProps) => {
	return (
		<Box as="main" flexGrow={1}>
			<Stack spacing={3} p={2}>
				<Heading as="h1" size="4xl" noOfLines={1}>
					(4xl) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h2" size="3xl" noOfLines={1}>
					(3xl) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h2" size="2xl">
					(2xl) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h2" size="xl">
					(xl) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h3" size="lg">
					(lg) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h4" size="md">
					(md) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h5" size="sm">
					(sm) The Tim Creamer Prayer Room
				</Heading>
				<Heading as="h6" size="xs">
					(xs) The Tim Creamer Prayer Room
				</Heading>
			</Stack>
			<Stack spacing={3} p={2}>
				<Text fontSize="2xl">
					(2xl) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text fontSize="xl">
					(xl) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text fontSize="lg">
					(lg) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text>
					(Default) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text fontSize="md">
					(md) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text fontSize="sm">
					(sm) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
				<Text fontSize="xs">
					(xs) Lorem ipsum dolor sit amet, consectetur adipiscing
					elit,
				</Text>
			</Stack>
			<Stack spacing={3} p={2}>
				<Text color={'red.500'}>An example of red text</Text>
				<Text color={'yellow.500'}>An example of yellow text</Text>
				<Text color={'navy.500'}>An example of navy text</Text>
				<Text color={'teal.500'}>An example of teal text</Text>
				<Text color={'black'}>An example of black text</Text>
			</Stack>
		</Box>
	);
};

export default HomeLayout;
