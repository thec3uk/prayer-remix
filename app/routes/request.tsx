import React from 'react';
import Layout from '../components/layout';
import BoxButton from '../components/boxButton';
import PrayerPraiseToggle from '../components/prayerPraise';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Menu from '~/components/Menu';
import dayjs from 'dayjs';

type IRequest = {
	title?: string;
	name?: string;
	prayer?: string;
};

const PrayerRequestPage = () => {
	const [state, setState] = React.useState<IRequest>();
	const [isPraise, setIsPraise] = React.useState(false);
	const [error, setError] = React.useState('');
	const prayerString = isPraise ? 'praise' : 'prayer';

	const handleChange = (e: any) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		var Airtable = require('airtable');
		var base = new Airtable({ apiKey: 'keyzbsUppOWt4APd0' }).base(
			'appzh9VO8LUHq2PR4'
		);

		base('Prayer/Praise Requests').create(
			[
				{
					fields: {
						title: state?.title,
						type: prayerString,
						name: state?.name,
						prayer: state?.prayer,
						created_at: dayjs(),
						'Prayer Count': 0,
					},
				},
			],
			function (err: any) {
				if (err) {
					setError('err');
					console.error(err);
					return;
				}
				window.location.href = '/thanks';
			}
		);
	};

	const RequestPageMenu = (
		<Menu links={[{ label: 'View Prayers', url: '/list' }]} />
	);

	return (
		<Layout title={`make a ${prayerString} request`} menu={RequestPageMenu}>
			<div>
				<div className="w-screen px-4 py-2 mb-24 font-sans text-lg bg-gray-500 shadow md:w-full text-gray-50">
					Submit a public {prayerString} request
				</div>

				<div className="relative md:h-full md:flex md:flex-col md:justify-center md:mx-32">
					<div className="rounded md:bg-gray-50 md:shadow-lg md:p-4">
						{error && (
							<div className="bg-red-200 px-4 py-2">{error}</div>
						)}
						<form
							name="prayer-request"
							action="/thanks/"
							className="mx-2 space-y-2"
							onSubmit={handleSubmit}
						>
							<input
								type="hidden"
								name="form-name"
								value="prayer-request"
							/>{' '}
							<input
								type="hidden"
								name="type"
								value={prayerString}
							/>
							<p hidden>
								<label>
									Don't fill this out:{' '}
									<input
										name="bot-field"
										onChange={handleChange}
									/>
								</label>
							</p>
							<Input
								onChange={handleChange}
								label="Name"
								name="name"
							/>
							<PrayerPraiseToggle
								enabled={isPraise}
								setEnabled={setIsPraise}
							/>
							<Input
								onChange={handleChange}
								label={`${prayerString} Title`}
								name="title"
								required
							/>
							<TextArea
								onChange={handleChange}
								label={prayerString}
								name="prayer"
							/>
							<div className="pt-4 -mx-2 md:-mx-6">
								<BoxButton
									title={`Share your ${prayerString}`}
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

export default PrayerRequestPage;
