import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import Card from '~/components/Card';
import Carousel from '~/components/Carousel';
import type { IPrayerRoomProps } from './home.definition';

const HomeLayout = ({ data: requests }: IPrayerRoomProps) => {
	return (
		<Box>
			<Grid
				as="section"
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				mb={{ base: 8, md: 16 }}
			>
				<Flex alignItems="center" mb={{ base: 2 }}>
					<Box maxW={{ md: 'xl' }}>
						<Box my={{ base: 2, md: 14 }} mx={{ base: 2 }}>
							<Heading
								as="h1"
								size={{ base: 'md', md: '3xl' }}
								mb={{ base: 2, md: 4 }}
								textTransform="uppercase"
							>
								The{' '}
								<Box as="span" color="teal">
									Tim Creamer
								</Box>{' '}
								Prayer Room
							</Heading>
							<Text fontWeight="bold" mb={{ base: 2, md: 4 }}>
								a time to be silent and a time to speak
							</Text>
							<Text size={{ base: 'sm' }} mb={{ base: 2, md: 4 }}>
								This space was created in honour of Tim Creamer.
								A man of passionate faith who was always first
								to pray. Sadly missed but an inspiration to us
								all to 'run the race with perseverance'.
							</Text>
							<Button
								rightIcon={<ArrowForwardIcon />}
								aria-label={'Go to Prayer Wall'}
								size={{ base: 'sm', md: 'md' }}
							>
								Go to prayer wall
							</Button>
						</Box>
					</Box>
				</Flex>
				<Image src="/home.jpg" alt="People praying"></Image>
			</Grid>
			<Box as="section" maxW={{ md: '1028px' }} mb={8}>
				<Card
					title="Next Prayer Meeting..."
					subTitle="Join us on Zoom"
					text="Wednesday 5th October 7.30pm"
					img="/pedro-lima-HtwsbbClBOs-unsplash 1.png"
				></Card>
			</Box>
			<Box as="section" maxW={{ md: '1028px' }} mb={8}>
				<Carousel prop="test"></Carousel>
			</Box>
		</Box>
	);
};

export default HomeLayout;
