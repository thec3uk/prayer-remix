import {
	chakra,
	Flex,
	Icon,
	shouldForwardProp,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Praise from '../Praise';
import PrayerHands from '../PrayerHands';
import PrayerModal from '../PrayerModal';
import type { IFeaturePrayerCardProps } from './FeaturePrayerCard.definition';
import { BsPinAngle, BsPinFill } from 'react-icons/bs';
import { motion, isValidMotionProp } from 'framer-motion';
import { useState } from 'react';

const FeaturePrayerCard = ({
	data,
	pinned,
	togglePin,
}: IFeaturePrayerCardProps) => {
	const bgColor = data.type == 'praise' ? 'yellow.500' : 'teal.500';
	const textColor = useColorModeValue('inherit', 'whiteAlpha.900');
	const { isOpen, onClose, onOpen } = useDisclosure();
	const ChakraBox = chakra(motion.div, {
		shouldForwardProp: prop =>
			isValidMotionProp(prop) || shouldForwardProp(prop),
	});

	const [content, setContent] = useState(false);
	const cardVariant = {
		back: {
			x: 0,
			rotateY: 0,
			zIndex: 10,
			transition: {
				type: 'spring',
				duration: 2.0,
			},
		},
		front: {
			x: 0,
			rotateY: 180,
			transition: {
				type: 'spring',
				duration: 2.0,
			},
		},
	};

	const handleClick = () => {
		setContent(() => !content);
	};

	return (
		<Flex
			w={'100%'}
			h={'100%'}
			alignItems={'center'}
			justifyContent="center"
			position={'relative'}
		>
			<ChakraBox
				// onClick={handleClick}
				variants={cardVariant}
				animate={content ? 'front' : ''}
				initial={{ rotateY: 0, zIndex: 10 }}
				sx={{
					WebkitBackfaceVisibility: 'hidden',
					backfaceVisibility: 'hidden',
				}}
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Flex
					bgColor={useColorModeValue('white', 'gray.800')}
					boxShadow={useColorModeValue(
						'0px 0px 2px rgba(0, 0, 0, 0.25)',
						'0px 0px 2px rgba(255, 255, 255, 0.25)'
					)}
					p={5}
					alignContent={'space-between'}
					borderTop={'0.25em solid'}
					borderColor={bgColor}
					_hover={{
						cursor: 'pointer',
					}}
					w={'100%'}
					flexDirection="column"
					justifyContent="space-between"
				>
					<Flex justifyContent={'space-between'}>
						{data.type == 'praise' ? (
							<Praise w="24px" h="26px" />
						) : (
							<PrayerHands w="24px" h="26px" />
						)}
						{/* {togglePin &&
							(pinned ? (
								<Icon
									as={BsPinFill}
									h="26px"
									onClick={() => togglePin(!pinned)}
								/>
							) : (
								<Icon
									as={BsPinAngle}
									h="26px"
									onClick={() => togglePin(!pinned)}
								/>
							))} */}
					</Flex>
					<Text
						color={textColor}
						size={'xl'}
						mb={2}
						mt={2}
						onClick={onOpen}
					>
						{data.prayer}
					</Text>
					<Flex direction="row" justifyContent={'space-between'}>
						<Text fontWeight="bold" color={textColor} mb={2}>
							{`${data.name} ${
								data.location ? ` (${data.location})` : ''
							}`}
						</Text>
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
			</ChakraBox>
			<ChakraBox
				onClick={handleClick}
				variants={cardVariant}
				animate={content ? 'back' : ''}
				initial={{ rotateY: 180 }}
				position={'absolute'}
				h={'100%'}
				w={'100%'}
				bgColor={'teal.500'}
				textColor={'white'}
				sx={{
					WebkitBackfaceVisibility: 'hidden',
					backfaceVisibility: 'hidden',
				}}
				boxShadow={useColorModeValue(
					'0px 0px 2px rgba(0, 0, 0, 0.25)',
					'0px 0px 2px rgba(255, 255, 255, 0.25)'
				)}
			>
				<Flex
					alignContent={'space-between'}
					borderTop={'0.25em solid'}
					p={5}
					borderColor={'white'}
					flexDirection="column"
					justifyContent="space-between"
				>
					More information can go on the back?!
					{JSON.stringify(content)}
				</Flex>
			</ChakraBox>
		</Flex>
	);
};

export default FeaturePrayerCard;
