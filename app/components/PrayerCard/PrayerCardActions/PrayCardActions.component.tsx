import { Flex, Button, Circle, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import Flag from '~/components/Flag';
import PrayerHands from '~/components/PrayerHands';
import type { IPrayerCardProps } from '../PrayerCard.definition';

function PrayerCardActions({ data, onAmen, onReport }: IPrayerCardProps) {
	const [counter, setCounter] = useState(data.count);
	return (
		<Flex
			flexDir={{ base: 'column', md: 'row' }}
			gap={{ base: 2 }}
			justifyContent="space-between"
			alignItems="baseline"
		>
			<Flex justifyContent="flex-start" gap={2} alignItems="baseline">
				<Text>{data.created_at}</Text>
				<Box w={0.5} h={4} bgColor="gray.200"></Box>
				<Flex
					gap={'inherit'}
					alignItems={'baseline'}
					as="button"
					onClick={() => onReport(data.id)}
				>
					<Flag color={data.flagged ? 'gray.500' : 'white'} />
					<Text textDecor={'underline'}>Report</Text>
				</Flex>
			</Flex>
			<Button
				leftIcon={<PrayerHands w="24px" h="26px" />}
				variant="outline"
				fontSize="sm"
				display="flex"
				justifyContent={'space-between'}
				onClick={() => {
					onAmen(data.id, counter);
					setCounter(counter + 1);
				}}
				w={33}
				h={12}
				px={2}
				py={4}
			>
				{data.type === 'prayer' ? 'Pray' : 'Praise'}
				<Circle p={'10px'} bg="blue.500" borderRadius="50%" size={6}>
					{counter}
				</Circle>
			</Button>
		</Flex>
	);
}

export default PrayerCardActions;
