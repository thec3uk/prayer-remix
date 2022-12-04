import {
	Box,
	Flex,
	Grid,
	GridItem,
	HStack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import PrayerModal from '../PrayerModal';
import type { IFeaturePrayerCardProps } from './FeaturePrayerCard.definition';

const FeaturePrayerCard = ({ data }: IFeaturePrayerCardProps) => {
	const bgColor = data.type == 'praise' ? 'yellow.500' : 'teal.500';
	const textColor = useColorModeValue('inherit', 'whiteAlpha.900');
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Flex
			bgColor={useColorModeValue('gray.100', 'gray.800')}
			boxShadow={useColorModeValue(
				'0px 0px 2px rgba(0, 0, 0, 0.25)',
				'0px 0px 2px rgba(255, 255, 255, 0.25)'
			)}
			p={5}
			alignContent={'space-between'}
			borderTop={'0.25em solid'}
			borderColor={bgColor}
			_hover={{
				background: 'white',
				cursor: 'pointer',
			}}
			onClick={onOpen}
			flexDirection="column"
			justifyContent="space-between"
		>
			<Text color={textColor} size={'xl'} mb={2}>
				{data.prayer}
			</Text>
			<Flex direction="row" justifyContent={'space-between'}>
				<Text fontWeight="bold" color={textColor} mb={2}>
					{`${data.name} ${
						data.location ? ` (${data.location})` : ''
					}`}
				</Text>
				<Text>{data.created_at}</Text>
			</Flex>
			<PrayerModal
				prayer={data.prayer}
				name={data.name}
				location={data.location}
				bgColor={bgColor}
				isOpen={isOpen}
				onClose={onClose}
			></PrayerModal>
		</Flex>
	);
};

export default FeaturePrayerCard;
