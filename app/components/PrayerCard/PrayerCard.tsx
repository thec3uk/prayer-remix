import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import type { IPrayerCardProps } from './PrayerCard.definition';
import PrayerCardActions from './PrayerCardActions';

const PrayerCard = ({
	data,
	onAmen,
	onReport,
	featureView = false,
}: IPrayerCardProps) => {
	const bgColor = data.type == 'praise' ? 'yellow.500' : 'teal.500';
	const fontSize = featureView ? 'xl' : 'md';
	const textColor = useColorModeValue('inherit', 'whiteAlpha.900');

	return (
		<Box
			w="100%"
			mb={4}
			display="inline-block"
			bgColor={useColorModeValue('gray.100', 'gray.800')}
			boxShadow={useColorModeValue(
				'0px 0px 2px rgba(0, 0, 0, 0.25)',
				'0px 0px 2px rgba(255, 255, 255, 0.25)'
			)}
		>
			<Box w="100%" bgColor={bgColor} h={1}></Box>
			<Flex flexDir={'column'} p={5} gap={2}>
				<Text color={textColor} size={fontSize}>
					{data.prayer}
				</Text>
				<Flex flexDir={'row'} justifyContent="space-between">
					<Text fontWeight="bold" color={textColor}>
						{`${data.name} ${
							data.location ? ` (${data.location})` : ''
						}`}
					</Text>
					{featureView && (
						<Text color={textColor}>{data.created_at}</Text>
					)}
				</Flex>
				{!featureView && (
					<PrayerCardActions
						data={data}
						onAmen={onAmen}
						onReport={onReport}
					/>
				)}
			</Flex>
		</Box>
	);
};

export default PrayerCard;
