import { Box, Flex, HStack, Text, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { flagRequest, incrementPrayerCount } from '~/api/airTableApi';
import type { IPrayerCardProps } from './PrayerCard.definition';

const PrayerCard = ({ data }: IPrayerCardProps) => {
	const [counter, setCounter] = useState(data.count);
	const [feedback, setFeedback] = useState('');

	const onClick = async () => {
		if (data.id) {
			const resp = await incrementPrayerCount(data.id, counter);
			setCounter(resp);
		}
	};
	const report = async () => {
		const resp = await flagRequest(data.id);
		setFeedback(
			resp
				? 'This request has been flagged.'
				: 'Something went wrong, please contact us at prayer@thec3.uk'
		);
	};
	const bgColor = data.type == 'praise' ? 'yellow.500' : 'teal.500';

	return (
		<Box
			w="100%"
			mb={4}
			display="inline-block"
			bgColor="white"
			boxShadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
		>
			<Box w="100%" bgColor={bgColor} h="4px"></Box>
			<Flex flexDir={'column'} p={5} gap={2}>
				<Text size="xs">{data.prayer}</Text>
				<Text size="xs" fontWeight="bold">
					{`${data.name} ${
						data.location ? ` (${data.location})` : ''
					}`}
				</Text>
				<HStack justifyContent="space-between">
					<Flex
						justifyContent="space-between"
						gap="3"
						alignItems="inherit"
					>
						<Text size="xxs">{data.created_at}</Text>
						<Box w="2px" h="17px" bgColor={'#D9D9D9'}></Box>
						<Image h="14px" w="12px" src="/flag.png" />
						<Text textDecor={'underline'}>Report</Text>
					</Flex>
					<Button variant="outline" size={'sm'}>
						Pray
						{/* Pray <Box bgColor={'teal.500'}>{data.count}</Box> */}
					</Button>
				</HStack>

				{feedback && <p>Thank you, we will review this request</p>}
			</Flex>
		</Box>
	);
};

export default PrayerCard;
