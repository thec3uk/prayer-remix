import type { ICarouselProps } from './Carousel.definition';
import {
	Stack,
	Text,
	Box,
	IconButton,
	createIcon,
	GridItem,
	Grid,
} from '@chakra-ui/react';
import Nuka from 'nuka-carousel';

export const CaretLeftIcon = createIcon({
	displayName: 'CaretLeftIcon',
	viewBox: '0 0 40 36',
	defaultProps: {
		color: 'white',
		h: '36px',
		w: '36px',
	},
	d: 'M0.839285 15.9695C-0.276785 17.0926 -0.276785 18.9164 0.839284 20.0394L15.125 34.4144C16.2411 35.5375 18.0536 35.5375 19.1696 34.4144C20.2857 33.2914 20.2857 31.4676 19.1696 30.3445L9.75 20.875L37.1429 20.875C38.7232 20.875 40 19.5902 40 18C40 16.4097 38.7232 15.125 37.1429 15.125L9.75893 15.125L19.1607 5.65545C20.2768 4.5324 20.2768 2.70857 19.1607 1.58552C18.0446 0.462473 16.2321 0.462473 15.1161 1.58552L0.830358 15.9605L0.839285 15.9695Z',
});

export const CaretRightIcon = createIcon({
	displayName: 'CaretRightIcon',
	viewBox: '0 0 40 36',
	defaultProps: {
		color: 'white',
		h: '36px',
		w: '36px',
	},
	d: 'M39.1607 20.0305C40.2768 18.9074 40.2768 17.0836 39.1607 15.9606L24.875 1.58557C23.7589 0.462524 21.9464 0.462524 20.8304 1.58557C19.7143 2.70862 19.7143 4.53245 20.8304 5.65549L30.25 15.125H2.85714C1.27679 15.125 0 16.4098 0 18C0 19.5903 1.27679 20.875 2.85714 20.875H30.2411L20.8393 30.3446C19.7232 31.4676 19.7232 33.2914 20.8393 34.4145C21.9554 35.5375 23.7679 35.5375 24.8839 34.4145L39.1696 20.0395L39.1607 20.0305Z',
});

function Carousel({ items }: ICarouselProps) {
	const border = '1px solid rgba(255, 255, 255, 0.24)';

	return (
		<Grid templateColumns="repeat(5, 1fr)">
			<GridItem colSpan={2}>
				<Text
					mt={{ base: 4, md: 8 }}
					ml={{ base: 4, md: 6 }}
					color="white"
					fontWeight="bold"
					as="h2"
					size={{ base: 'md', md: '2xl' }}
					minW={{ base: '40%', md: '30%' }}
				>
					Be inspired...
				</Text>
			</GridItem>
			<GridItem colSpan={3} borderLeft={border}>
				<Box mr={{ base: 4, md: 8 }} mb={2}>
					<Nuka
						slidesToShow={1}
						wrapAround={true}
						renderBottomRightControls={({
							nextSlide,
							previousSlide,
						}) => (
							<Box>
								<IconButton
									variant={'link'}
									_focus={{
										boxShadow: 'none',
										outline: 'none',
										outlineOffset: '0px',
										outlineColor: 'none',
									}}
									onClick={previousSlide}
									icon={
										<CaretLeftIcon
											h={{ base: 4, md: 'auto' }}
										/>
									}
									aria-label="Show the previous set of resources in the resource carousel"
								/>
								<IconButton
									variant={'link'}
									_focus={{
										boxShadow: 'none',
										outline: 'none',
										outlineOffset: '0px',
										outlineColor: 'none',
									}}
									onClick={nextSlide}
									ml={{ base: 'none', md: 4 }}
									icon={
										<CaretRightIcon
											h={{ base: 4, md: 'auto' }}
										/>
									}
									aria-label="Show the next set of resources in the resource carousel"
								/>
							</Box>
						)}
						renderBottomCenterControls={null}
						renderCenterLeftControls={null}
						renderCenterRightControls={null}
					>
						{items.map((item, idx) => (
							<Stack
								key={idx}
								mb={{ base: 10 }}
								mt={{ base: 4, md: 8 }}
								ml={{ base: 2, md: 4 }}
								gap={1}
							>
								<Text
									color="white"
									size={{ base: 'sm', md: '1xl' }}
								>
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
	);
}

export default Carousel;
