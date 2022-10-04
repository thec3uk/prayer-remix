import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
	const copyrightYear = new Date().getFullYear();
	const height = { base: '2.5rem', md: '2.5rem' };

	return (
		<Box as="footer" flex="0 0 auto" bgColor="gray.500" h={height} p={2}>
			<Flex>
				<Text color="white" fontSize="xs">
					&copy; The C3 Church {copyrightYear}
				</Text>
			</Flex>
		</Box>
	);
}

export default Footer;
