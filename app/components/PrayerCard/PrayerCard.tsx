import {
	Box,
	Flex,
	Heading,
	HStack,
	Text,
	VStack,
	WrapItem,
} from '@chakra-ui/react';
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
			bgColor={bgColor}
			w="100%"
			borderRadius="xl"
			mb={2}
			display="inline-block"
		>
			<VStack p="1">
				<Heading
					size="xs"
					as="h3"
					textOverflow="ellipsis"
					overflow="clip"
					width="90%"
					whiteSpace="nowrap"
					color="white"
					title={data.title}
				>
					{data.title}
				</Heading>
				<Text size="xs" color="white">
					{data.prayer}
				</Text>
				<HStack justifyContent="space-between" w="90%">
					<Text size="xs" color="white">
						{`${data.name} ${
							data.location ? ` (${data.location})` : ''
						}`}
					</Text>
					<HStack gap="0.5">
						<Box bgColor="white" px={3} py={1} borderRadius="xl">
							<button onClick={onClick}>
								{data.type === 'praise' ? (
									<span
										role="img"
										aria-label="party popper"
										className="pr-2"
									>
										🎉
									</span>
								) : (
									<span
										role="img"
										aria-label="folded hands"
										className="pr-2"
									>
										🙏
									</span>
								)}
								{counter > 0 ? counter : ''}
							</button>
						</Box>
						<button disabled={!!feedback} onClick={report}>
							<span
								role="img"
								aria-label="red flag"
								title="Report this request as inappropriate"
								className="pr-2"
							>
								🚩
							</span>
						</button>
					</HStack>
				</HStack>

				{feedback && <p>Thank you, we will review this request</p>}
			</VStack>
		</Box>
	);
};

export default PrayerCard;
