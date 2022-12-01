import { Grid, GridItem, Text } from '@chakra-ui/react';
import type { IPrayerCardProps } from './PrayerCard.definition';
import PrayerCardActions from './PrayerCardActions';

const PrayerCard = ({ data, onAmen, onReport }: IPrayerCardProps) => {
	const bgColor = data.type == 'praise' ? 'yellow.500' : 'teal.500';

	return (
		<>
			<Grid
				bgColor={'gray.100'}
				boxShadow={'0px 0px 2px rgba(0, 0, 0, 0.25)'}
				rowGap={4}
				p={5}
				alignContent={'space-between'}
				borderTop={'0.25em solid'}
				borderColor={bgColor}
				_hover={{
					background: 'white',
				}}
			>
				<GridItem mx={4}>
					<Text>{data.prayer}</Text>
				</GridItem>
				<GridItem mx={4}>
					<Text fontWeight="bold" mb={2}>
						{`${data.name} ${
							data.location ? ` (${data.location})` : ''
						}`}
					</Text>
					<PrayerCardActions
						data={data}
						onAmen={onAmen}
						onReport={onReport}
					/>
				</GridItem>
			</Grid>
		</>
	);
};

export default PrayerCard;
