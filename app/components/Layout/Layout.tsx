import { Box, VStack } from '@chakra-ui/react';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<VStack width={'100%'}>
			<Box w={'100%'} as="main">
				{children}
			</Box>
		</VStack>
	);
}
