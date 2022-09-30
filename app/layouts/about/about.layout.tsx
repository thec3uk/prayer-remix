import { Box, Heading, Text, Image, Circle, Flex } from '@chakra-ui/react';

const About = () => {
	return (
		<Box flexGrow={1} as="main" p={2}>
			<Heading as="h2" size="sm">
				About this space
			</Heading>
			<Flex flexDir={{ base: 'column', md: 'row' }}>
				<Text>
					This space was created in honour of Tim Creamer. A man of
					passionate faith who was always first to pray. Sadly missed
					but an inspiration to us all to 'run the race with
					perseverance'.
				</Text>
				<Circle maxWidth={{ base: '90%', md: '50%' }}>
					<Image
						src="/223-3.jpg"
						alt="Tim with his Family outside The C3 Centre"
						borderRadius="50%"
					></Image>
				</Circle>
			</Flex>
		</Box>
	);
};

export default About;
