import Layout from '../components/layout';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

dayjs.extend(customParseFormat);

export const loader: LoaderFunction = async () => {
	const base = 'appzh9VO8LUHq2PR4';
	const endpointUrl = 'https://api.airtable.com';
	const tableName = 'Settings';
	const res = await fetch(
		`${endpointUrl}/v0/${base}/${tableName}/rec1fSqbN4koqpktH`,
		{
			headers: new Headers({
				Authorization: 'Bearer keyzbsUppOWt4APd0',
			}),
		}
	);
	const setting = await res.json();
	return {
		groupCallEnabled: setting.fields.Enabled,
		buttonText: setting.fields['Button Text'],
	};
};

type IPrayerMeetupPageProps = {
	groupCallEnabled: boolean;
	buttonText: string;
};

const PrayerMeetupPage = () => {
	const { groupCallEnabled, buttonText } =
		useLoaderData<IPrayerMeetupPageProps>();
	return (
		<Layout title={'join a meetup'}>
			<div>
				<div
					className={`w-screen px-4 py-2 ${
						groupCallEnabled ? 'mb-12' : 'mb-24'
					} font-sans text-lg bg-gray-600 shadow md:w-full text-gray-50`}
				>
					See upcoming prayer meetups
				</div>
				{groupCallEnabled && (
					<div className="flex justify-center">
						<div className="w-screen px-4 mb-8 text-lg font-extrabold text-center text-black md:w-full md:p-3 md:shadow md:m-4 md:bg-gray-50">
							<h2 className="w-full mb-4 text-2xl text-left underline">
								Group Prayer
							</h2>
							<a href="https://zoom.us/j/6218249928?pwd=MnhyenA2clIrS0IwNEZ5b3hGMldMZz09">
								<h3 className="block w-full p-4 text-gray-900 capitalize transform bg-blue-400 border border-gray-900 rounded shadow hover:border-gray-50 hover:translate-y-px hover:shadow-sm hover:bg-blue-500 hover:text-gray-100 ">
									{buttonText}
								</h3>
							</a>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default PrayerMeetupPage;
