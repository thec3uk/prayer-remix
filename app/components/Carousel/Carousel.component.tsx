import type { ICarouselProps } from './Carousel.definition';
import { Stack, Text, Box, IconButton, GridItem, Grid } from '@chakra-ui/react';
import {Carousel as Nuka} from 'nuka-carousel';
import CaretLeftIcon from '../CaretLeftIcon';
import CaretRightIcon from '../CaretRightIcon';

function Carousel({ items }: ICarouselProps) {
	const border = '1px solid #A3A3A3';
	return  <Grid
			templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
			w="full"
			minHeight="xs"
		>
			<GridItem colSpan={2}>
				<Text
					mt={{ base: 4, md: 8 }}
					ml={{ base: 4, md: 6 }}
					fontWeight="bold"
					as="h2"
					color={'gray.500'}
					fontSize={{ base: '3xl', md: '5xl' }}
				>
					Be inspired...
				</Text>
			</GridItem>
			<GridItem colSpan={3} borderLeft={{ base: 'none', md: border }}>
				<Box mr={{ base: 4, md: 8 }} mb={2}>
					<Nuka
						wrapMode='wrap'
						showArrows={true}
					>
						{items.map((item, idx) => (
							<Stack
								key={idx}
								mb={{ base: 10 }}
								mt={{ base: 4, md: 8 }}
								ml={4}
								gap={1}
							>
								<Text color={'gray.500'} fontSize="2xl">
									{item.title}
								</Text>
								<Text fontWeight="bold" color="teal.500">
									{item.subTitle}
								</Text>
							</Stack>
						))}
					</Nuka>
				</Box>
			</GridItem>
		</Grid>
	
}

export default Carousel;
