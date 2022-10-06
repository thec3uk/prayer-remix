import type { ICarouselProps } from './Carousel.definition';
import {
	Stack,
	Text,
	Flex,
	Box,
	IconButton,
	createIcon,
} from '@chakra-ui/react';
import Nuka from 'nuka-carousel';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export const CaretLeftIcon = createIcon({
	displayName: 'CaretLeftIcon',
	viewBox: '0 0 24 24',
	d: 'M13.8045 19.8983L7.09666 12.7733C6.89158 12.5565 6.78906 12.2783 6.78906 11.9999C6.78906 11.7215 6.89163 11.443 7.09666 11.2264L13.8045 4.10141C14.2322 3.65024 14.944 3.63126 15.3949 4.05747C15.8491 4.4852 15.8651 5.20028 15.4389 5.64841L9.42013 12L15.4389 18.3515C15.8652 18.7998 15.849 19.5117 15.3949 19.9425C14.9482 20.367 14.2357 20.3483 13.8045 19.8983Z',
});

export const CaretRightIcon = createIcon({
	displayName: 'CaretRightIcon',
	viewBox: '0 0 24 24',
	d: 'M10.193 4.10152L16.9008 11.2265C17.1059 11.4433 17.2084 11.7215 17.2084 12C17.2084 12.2782 17.1058 12.5564 16.9008 12.7734L10.193 19.8984C9.76548 20.3484 9.05345 20.3671 8.60252 19.9406C8.14839 19.5128 8.13236 18.7978 8.55857 18.3496L14.5773 11.9981L8.55857 5.64652C8.13236 5.19839 8.1483 4.48823 8.60252 4.05745C9.05345 3.63136 9.76548 3.65011 10.193 4.10152Z',
});

function Carousel({ items }: ICarouselProps) {
	return (
		<Flex bgColor="navy.500" justifyContent="space-between">
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
				<Box width="100%">
					<Nuka
						renderBottomRightControls={({
							nextSlide,
							previousSlide,
						}) => (
							<>
								<IconButton
									variant={'ghost'}
									color={'white'}
									size={'lg'}
									onClick={previousSlide}
									transform={{
										base: 'translate(-110px, 0px)',
										xl: 'translate(-100%,0px)',
									}}
									icon={<ArrowBackIcon />}
									aria-label="Show the previous set of resources in the resource carousel"
								/>
								<IconButton
									variant={'ghost'}
									color={'white'}
									size={'lg'}
									mr={{ base: 4, lg: 0 }}
									transform={{
										base: 'translate(-110px, 0px)',
										xl: 'translate(-100%,0px)',
									}}
									onClick={nextSlide}
									icon={<ArrowForwardIcon />}
									aria-label="Show the next set of resources in the resource carousel"
								/>
							</>
						)}
						renderBottomCenterControls={null}
						renderCenterLeftControls={null}
						renderCenterRightControls={null}
					>
						{items.map((item, idx) => (
							<Stack key={idx} my={8} ml={6} gap={1} maxW={'70%'}>
								<Text
									color="white"
									size={{ sm: 'sm', md: '2xl' }}
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
			</Stack>
		</Flex>
	);
}

export default Carousel;
