import { Grid, GridItem, Text, useColorModeValue } from '@chakra-ui/react';
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
		<Grid
			bgColor={useColorModeValue('gray.100', 'gray.800')}
			boxShadow={useColorModeValue(
				'0px 0px 2px rgba(0, 0, 0, 0.25)',
				'0px 0px 2px rgba(255, 255, 255, 0.25)'
			)}
			templateColumns="1"
			rowGap={4}
			py={4}
			alignContent={'space-between'}
			borderTop={'0.25em solid'}
			borderColor={bgColor}
		>
			<GridItem mx={4}>
				<Text color={textColor} size={fontSize}>
					{data.prayer}
				</Text>
			</GridItem>
			<GridItem mx={4}>
				<Text fontWeight="bold" color={textColor} mb={2}>
					{`${data.name} ${
						data.location ? ` (${data.location})` : ''
					}`}
				</Text>
				{!featureView && (
					<PrayerCardActions
						data={data}
						onAmen={onAmen}
						onReport={onReport}
					/>
				)}
			</GridItem>
		</Grid>
	);
};

export default PrayerCard;
