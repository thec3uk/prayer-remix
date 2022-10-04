import {
	Button,
	Container,
	Heading,
	Input,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { submitRequest } from '~/api/airTableApi';
import type { IRequestForm, IRequestLayoutProps } from './request.definition';
import { FormControl, FormLabel } from '@chakra-ui/react';

const RequestLayout = ({ locations }: IRequestLayoutProps) => {
	const [error, setError] = React.useState('');
	const { register, handleSubmit } = useForm<IRequestForm>();

	const onSubmit = async (data: any) => {
		try {
			// await submitRequest(data);
			console.log(data);
			window.location.href = '/thanks';
		} catch {
			setError('Unable to submit your request');
		}
	};

	return (
		<Container>
			<Heading size="md" py="2">
				Submit a public request
			</Heading>
			{error && <div>{error}</div>}
			<form name="prayer-request" onSubmit={handleSubmit(onSubmit)}>
				<VStack spacing={2}>
					<FormControl>
						<FormLabel>Name</FormLabel>
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
						<FormLabel>Prayer or praise?</FormLabel>
						<RadioGroup>
							<Stack direction="row">
								<Radio {...register('prayer')} value={'true'}>
									Prayer
								</Radio>
								<Radio {...register('prayer')} value={'false'}>
									Prayer
								</Radio>
							</Stack>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel>Location</FormLabel>
						<Select {...register('location')}>
							<option> - </option>
							{locations.map(l => (
								<option key={l.name} value={l.name}>
									{l.name}
								</option>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Title</FormLabel>
						<Input
							{...register('title', {
								required: true,
							})}
							required
							type="text"
							autoComplete="off"
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Request</FormLabel>
						<Textarea
							{...register('title', {
								required: true,
							})}
							required
							autoComplete="off"
							size="md"
						/>
					</FormControl>
					<Button type="submit">Submit your request</Button>
				</VStack>
			</form>
		</Container>
	);
};

export default RequestLayout;
