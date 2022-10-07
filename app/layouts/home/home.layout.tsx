import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import Card from '~/components/Card';
import Carousel from '~/components/Carousel';
import Link from '~/components/Link';
import type { IHomeProps } from './home.definition';

const HomeLayout = ({ link, verses }: IHomeProps) => {
	return (
		<Box px={{ base: 3, md: 4 }}>
			<Grid
				as="section"
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				mb={{ base: 8, md: 16 }}
			>
				<Flex alignItems="center" mb={{ base: 2 }}>
					<Box maxW={{ md: 'xl' }}>
						<Box my={{ base: 2, md: 14 }}>
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
							<Link
								href="/prayerwall"
								useButton
								text="Go to prayer wall"
								aria-label="Go to Prayer Wall"
								buttonProps={{
									rightIcon: <ArrowForwardIcon />,
								}}
							/>
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
					href={link.text}
				></Card>
			</Box>
			<Box
				as="section"
				maxW={{ md: '1028px' }}
				mb={8}
				overflowX={'hidden'}
				w={{ base: '95vw' }}
			>
				<Carousel
					items={verses.map(v => ({
						title: v.content,
						subTitle: v.verse,
					}))}
				></Carousel>
			</Box>
		</Box>
	);
};

export default HomeLayout;
