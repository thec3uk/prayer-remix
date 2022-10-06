import {
	Box,
	Button,
	Flex,
	FormErrorMessage,
	FormHelperText,
	Grid,
	Heading,
	Input,
	Radio,
	RadioGroup,
	Stack,
	StackDivider,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import { useForm, useWatch } from 'react-hook-form';
import { submitRequest } from '~/api/airTableApi';
import type { IRequestForm, IRequestLayoutProps } from './request.definition';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Form, useNavigate } from '@remix-run/react';
import PrayerHands from '~/components/PrayerHands';
import Praise from '~/components/Praise';
import Card from '~/components/Card';

const RequestLayout = ({ locations }: IRequestLayoutProps) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<IRequestForm>();
	const prayer = useWatch({ control, name: 'prayer' });
	const toast = useToast();

	const onSubmit = async (data: any) => {
		try {
			await submitRequest(data);
			navigate('/prayerwall');
			toast({
				title: 'Thank you',
				description: 'Your request has been submitted successfully.',
				status: 'success',
				duration: 10000,
				isClosable: true,
			});
		} catch {
			toast({
				title: 'Sorry',
				description: 'Something went wrong, please try again.',
				status: 'error',
				duration: 10000,
				isClosable: true,
			});
		}
	};

	return (
		<Flex px={{ base: 3, md: 4 }} flexGrow={1}>
			<Form name="prayer-request" onSubmit={handleSubmit(onSubmit)}>
				<Stack
					spacing={4}
					divider={<StackDivider borderColor="#D9D9D9" />}
				>
					<Heading
						as="h1"
						size={{ base: 'xl', md: '3xl' }}
						mb={{ base: 2, md: 4 }}
						textTransform="uppercase"
					>
						Submit a request
					</Heading>
					<FormControl>
						<FormLabel>Your name</FormLabel>
						<Input
							{...register('name', {
								required: true,
							})}
							required
							autoComplete="name"
							type="text"
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Location</FormLabel>
						<RadioGroup>
							<Grid templateColumns="repeat(2, 1fr)" gap={2}>
								{locations.map(l => (
									<Radio
										size={'lg'}
										key={l.name}
										{...register('location')}
										value={l.id}
									>
										{l.name}
									</Radio>
								))}
							</Grid>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel>Prayer or praise?</FormLabel>
						<RadioGroup>
							<Grid templateColumns="repeat(2, 1fr)" gap={2}>
								<Radio
									{...register('type')}
									value={'prayer'}
									size={'lg'}
								>
									Prayer{' '}
									<PrayerHands ml={1} w="24px" h="26px" />
								</Radio>
								<Radio
									{...register('type')}
									value={'praise'}
									size={'lg'}
								>
									Praise <Praise ml={1} w="22px" h="26px" />
								</Radio>
							</Grid>
						</RadioGroup>
					</FormControl>
					<Flex flexDir="column" alignItems="flex-end" gap={4}>
						<FormControl isInvalid={!!errors.prayer}>
							<FormLabel>Request</FormLabel>
							<Textarea
								{...register('prayer', {
									required: true,
									maxLength: 500,
								})}
								required
								autoComplete="off"
								size="md"
								maxLength={500}
							/>
							<FormErrorMessage>
								Please keep the request to 500 characters.
							</FormErrorMessage>
							<FormHelperText color={'gray.500'}>
								{prayer?.length || 0} of 500 characters
							</FormHelperText>
						</FormControl>
						<Button maxW={'50%'} type="submit">
							Add Request
						</Button>
					</Flex>
				</Stack>
				{/* Not in designs but having a weird width issue on this page*/}
				{/* and this will resolve until Jon can have a look.*/}
				<Box as="section" maxW={{ md: '1028px' }} my={8}>
					<Card
						title="Next Prayer Meeting..."
						subTitle="Join us on Zoom"
						text="Wednesday 5th October 7.30pm"
						img="/pedro-lima-HtwsbbClBOs-unsplash 1.png"
					></Card>
				</Box>
			</Form>
		</Flex>
	);
};

export default RequestLayout;
