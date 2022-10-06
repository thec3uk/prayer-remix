import {
	Box,
	Flex,
	Text,
	Image,
	Button,
	Circle,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { flagRequest, incrementPrayerCount } from '~/api/airTableApi';
import Flag from '../Flag';
import PrayerHands from '../PrayerHands';
import type { IPrayerCardProps } from './PrayerCard.definition';

const PrayerCard = ({ data }: IPrayerCardProps) => {
	const [counter, setCounter] = useState(data.count);
	const toast = useToast();

	const amen = async () => {
		if (data.id) {
			const resp = await incrementPrayerCount(data.id, counter);
			setCounter(resp);
		}
	};
	const report = async () => {
		const resp = await flagRequest(data.id);
		if (resp) {
			toast({
				title: 'Thank you',
				description:
					'We have flagged the request and will review shortly.',
				status: 'success',
				duration: 10000,
				isClosable: true,
			});
		} else {
			toast({
				title: 'Sorry',
				description:
					'Something went wrong, please try again or contact us.',
				status: 'error',
				duration: 10000,
				isClosable: true,
			});
		}
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
				<Flex
					flexDir={{ base: 'column', md: 'row' }}
					gap={{ base: 2 }}
					justifyContent="space-between"
					alignItems="baseline"
				>
					<Flex
						justifyContent="flex-start"
						gap="3"
						alignItems="inherit"
					>
						<Text size="xxs">{data.created_at}</Text>
						<Box w="2px" h="17px" bgColor={'#D9D9D9'}></Box>
						<Flex
							flexDir={'inherit'}
							gap={'inherit'}
							alignItems={'baseline'}
							as="button"
							onClick={() => report()}
						>
							{/* <Image h="14px" w="12px" src="/flag.png" /> */}
							<Flag color={data.flagged ? 'gray.500' : 'white'} />
							<Text textDecor={'underline'}>Report</Text>
						</Flex>
					</Flex>
					<Button
						leftIcon={<PrayerHands w="24px" h="26px" />}
						variant="outline"
						fontSize={'16px'}
						display="flex"
						justifyContent={'space-between'}
						onClick={() => amen()}
						w={'132px'}
						h={'44px'}
						px={'10px'}
						py={'16px'}
					>
						{data.type === 'prayer' ? 'Pray' : 'Praise'}
						<Circle
							p={'10px'}
							bg="#DDF3F5"
							borderRadius="50%"
							size="24px"
						>
							{counter}
						</Circle>
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default PrayerCard;
