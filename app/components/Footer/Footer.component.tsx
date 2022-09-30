import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
	const copyrightYear = new Date().getFullYear();

	return (
		<Box as="footer" flex="0 0 auto" bgColor="white" h="5rem" p={2}>
			<Flex>
				<Text color="gray.500" fontSize="xs">
					&copy; The C3 Church {copyrightYear}
				</Text>
			</Flex>
		</Box>
	);
}

export default Footer;
