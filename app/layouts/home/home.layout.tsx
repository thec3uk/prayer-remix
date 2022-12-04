import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import Card from '~/components/Card';
import Carousel from '~/components/Carousel';
import Link from '~/components/Link';
import type { IHomeProps } from './home.definition';

const HomeLayout = ({ link, verses, card, subTitle }: IHomeProps) => {
	const sectionMargin = { base: 6, md: 12 };
	return (
		<Box px={{ base: 3, md: 4 }}>
			<Grid
				as="section"
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				mb={sectionMargin}
			>
				<Flex alignItems="center" mr={5}>
					<Box maxW={{ md: 'xl' }}>
						<Box>
							<Heading
								as="h1"
								size="3xl"
								mb={{ base: 4, md: 6 }}
								textTransform="uppercase"
							>
								The{' '}
								<Box as="span" color="teal">
									Tim Creamer
								</Box>{' '}
								Prayer Room
							</Heading>
							<Text
								fontWeight="bold"
								size="lg"
								mb={{ base: 4, md: 6 }}
							>
								a time to be silent and a time to speak
							</Text>
							<Text size="md" mb={{ base: 4, md: 6 }}>
								{subTitle ||
									"This space was created in honour of Tim Creamer. A man of passionate faith who was always first to pray. Sadly missed but an inspiration to us all to run the race with perseverance'."}
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
				<Image
					display={{ base: 'none', md: 'block' }}
					src="/home-main.jpeg"
					alt="People praying"
				></Image>
			</Grid>
			<Box as="section" maxW={{ md: '1028px' }} mb={sectionMargin}>
				<Card
					title={card?.title || 'Weekly Prayer meetings'}
					subTitle={card?.subTitle || 'Join us on Zoom'}
					text={card?.text || 'Daily at 7.30am & 7.30pm'}
					img="/home-card.jpeg"
					href={card?.href || link.text}
				></Card>
			</Box>
			<Box
				as="section"
				maxW={{ md: '1028px' }}
				mb={sectionMargin}
				overflowX={'hidden'}
				bgColor={'white'}
				bgImage="url(/logomark-transparent.svg)"
				bgRepeat="no-repeat"
				bgSize="450px 405px"
				bgPosition="right"
				filter={'drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1))'}
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
