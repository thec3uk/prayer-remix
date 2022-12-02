import {
	Modal,
	Text,
	ModalOverlay,
	ModalContent,
	useColorModeValue,
	ModalBody,
} from '@chakra-ui/react';
import type { IPrayerModalProps } from './PrayerModal.definition';

function PrayerModal({
	prayer,
	name,
	location,
	bgColor,
	isOpen,
	onClose,
}: IPrayerModalProps) {
	const textColor = useColorModeValue('inherit', 'whiteAlpha.900');

	return (
		<Modal
			blockScrollOnMount={false}
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			size="xl"
			motionPreset="slideInBottom"
		>
			<ModalOverlay />
			<ModalContent
				bgColor={useColorModeValue('gray.100', 'gray.800')}
				borderTop={'0.25em solid'}
				borderColor={bgColor}
				py={10}
				px={10}
				maxW="75vw"
			>
				<ModalBody>
					<Text color={textColor} size={'xxl'} mb={5}>
						{prayer}
					</Text>
					<Text
						fontWeight="bold"
						size={'xl'}
						color={textColor}
						mb={2}
					>
						{`${name} ${location ? ` (${location})` : ''}`}
					</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}

export default PrayerModal;
