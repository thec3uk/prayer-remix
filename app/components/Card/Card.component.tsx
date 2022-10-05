import { Stack, Text, Image, Flex } from '@chakra-ui/react';
import type { ICardProps } from './Card.definition';

function Card({ title, subTitle, text, img, variant = 'primary' }: ICardProps) {
	return (
		<Flex
			bgColor="teal.500"
			justifyContent="space-between"
			mx={{ base: 2 }}
		>
			<Stack ml="4" my="auto">
				<Text
					color="white"
					fontWeight="bold"
					as="h2"
					size={{ base: 'sm', md: '2xl' }}
				>
					{title}
				</Text>
				<Text
					fontWeight="bold"
					color="white"
					as="h3"
					size={{ base: 'sm', md: 'xl' }}
				>
					{subTitle}
				</Text>
				<Text color="white" size={{ base: 'xs' }}>
					{text}
				</Text>
			</Stack>
			<Image maxW={{ base: '30%', md: '40%' }} src={img} />
		</Flex>
	);
}

export default Card;
