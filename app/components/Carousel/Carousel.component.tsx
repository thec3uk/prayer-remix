import type { ICarouselProps } from './Carousel.definition';
import { Stack, Text, Box, Flex } from '@chakra-ui/react';

function Carousel({ prop }: ICarouselProps) {
	return (
		<Flex
			bgColor="navy.500"
			justifyContent="space-between"
			mx={{ base: 2 }}
		>
			<Text
				mt={8}
				ml={{ base: 4, md: 6 }}
				color="white"
				fontWeight="bold"
				as="h2"
				size={{ base: 'md', md: '2xl' }}
				minW={{ base: '40%', md: '30%' }}
			>
				Be inspired...
			</Text>
			<Stack borderLeft={'1px solid rgba(255, 255, 255, 0.24)'}>
				<Stack my={8} ml={6} gap={1} maxW={'70%'}>
					<Text color="white" size={{ sm: 'sm', md: '2xl' }}>
						This is the confidence we have in approaching God: that
						if we ask anything according to his will, he hears us.
					</Text>
					<Text fontWeight="bold" color="teal.500">
						1 John 5:14
					</Text>
				</Stack>
			</Stack>
		</Flex>
	);
}

export default Carousel;
