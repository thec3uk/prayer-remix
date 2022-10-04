import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import type { IPrayerRoomProps } from './home.definition';

const HomeLayout = ({ data: requests }: IPrayerRoomProps) => {
	return (
		<Box as="main" flexGrow={1}>
			<Heading as="h4" size="md">
				The Tim Creamer Prayer Room
			</Heading>
		</Box>
	);
};

export default HomeLayout;
