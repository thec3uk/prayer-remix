import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { submitRequest } from '~/api/airTableApi';
import BoxButton from '~/components/boxButton';
import Layout from '~/components/Layout';
import Menu from '~/components/Menu';
import PrayerPraiseToggle from '~/components/prayerPraise';

type IRequestForm = {
	title?: string;
	name?: string;
	prayer?: string;
	type: 'prayer' | 'praise';
};

const RequestLayout = () => {
	const [error, setError] = React.useState('');
	const [isPraise, setIsPraise] = React.useState(false);
	const { register, handleSubmit, setValue } = useForm<IRequestForm>();

	useEffect(() => {
		setValue('type', isPraise ? 'praise' : 'prayer');
	}, [isPraise, setValue]);

	const onSubmit = async (data: any) => {
		try {
			await submitRequest(data);
			window.location.href = '/thanks';
		} catch {
			setError('Unable to submit your request');
		}
	};

	const RequestPageMenu = (
		<Menu links={[{ label: 'View Prayers', url: '/list' }]} />
	);

	return (
		<Layout title={`make a request`} menu={RequestPageMenu}>
			<div>
				<div className="w-screen px-4 py-2 mb-24 font-sans text-lg bg-gray-500 shadow md:w-full text-gray-50">
					Submit a public request
				</div>

				<div className="relative md:h-full md:flex md:flex-col md:justify-center md:mx-32">
					<div className="rounded md:bg-gray-50 md:shadow-lg md:p-4">
						{error && (
							<div className="bg-red-200 px-4 py-2">{error}</div>
						)}
						<form
							name="prayer-request"
							className="mx-2 space-y-2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 capitalize"
								>
									Name
								</label>
								<div className="mt-1">
									<input
										autoComplete="name"
										type="text"
										className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										{...register('name', {
											required: true,
										})}
										required
									/>
								</div>
							</div>
							<PrayerPraiseToggle
								enabled={isPraise}
								setEnabled={setIsPraise}
							/>
							<div>
								<label
									htmlFor="title"
									className="block text-sm font-medium text-gray-700 capitalize"
								>
									Title
								</label>
								<div className="mt-1">
									<input
										autoComplete="off"
										type="text"
										className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										{...register('title', {
											required: true,
										})}
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="request"
									className="block text-sm font-medium text-gray-700 capitalize"
								>
									Request
								</label>
								<div className="mt-1">
									<textarea
										rows={7}
										className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										{...register('prayer', {
											required: true,
										})}
										required
									/>
								</div>
							</div>
							<div className="pt-4 -mx-2 md:-mx-6">
								<BoxButton
									title={`Submit your request`}
									alignment="right"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default RequestLayout;
