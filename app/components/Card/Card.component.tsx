import { Text, Image, Flex, Grid, GridItem, Link } from '@chakra-ui/react';
import type { ICardProps } from './Card.definition';

function Card({ title, subTitle, text, img, href }: ICardProps) {
	return (
		<Link href={href} target="_blank" textTransform={'none'}>
			<Grid bgColor="teal.500" templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={3}>
					<Flex
						h={'100%'}
						ml={6}
						flexDir="column"
						justifyContent={'center'}
					>
						<Text
							color="white"
							fontWeight="bold"
							as="h2"
							size={{ base: 'md', md: '2xl' }}
						>
							{title}
						</Text>
						<Text
							fontWeight="bold"
							color="white"
							as="h3"
							size={{ base: 'xs', md: 'xl' }}
						>
							{subTitle}
						</Text>
						<Text color="white" size={{ base: 'xs' }}>
							{text}
						</Text>
					</Flex>
				</GridItem>
				<GridItem colSpan={2}>
					<Image src={img} objectFit={'cover'} />
				</GridItem>
			</Grid>
		</Link>
	);
}

export default Card;
