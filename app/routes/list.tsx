import Layout from '../components/layout';
import GroupedList from '../components/groupedList';
import PrayerCard from '../components/prayerCard';
import BoxLink from '../components/boxLink';
import dayjs from 'dayjs';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
	const base = 'appzh9VO8LUHq2PR4';
	const endpointUrl = 'https://api.airtable.com';
	const tableName = 'Prayer%2FPraise%20Requests';
	const res = await fetch(
		`${endpointUrl}/v0/${base}/${tableName}?maxRecords=100&view=Raw%20Submitted%20Requests`,
		{
			headers: new Headers({
				Authorization: 'Bearer keyzbsUppOWt4APd0',
			}),
		}
	);
	const requests = await res.json();
	return requests.records.map((r: any) => ({
		name: r.fields.name,
		prayer: r.fields.prayer,
		type: r.fields.type,
		title: r.fields.title,
		id: r.id,
		created_at: dayjs(r.createdTime).format('ddd DD MMM YYYY'),
	}));
};

const PrayerListPage = () => {
	const data = useLoaderData();
	return (
		<Layout
			title={'pray for someone'}
			menu={
				<>
					<div className="z-50 w-full mt-6 -mb-4">
						<BoxLink
							title="Request a prayer"
							alignment="right"
							to="/request"
						/>
					</div>
				</>
			}
		>
			<div className="">
				<div className="w-screen px-4 py-2 mb-8 font-sans text-lg bg-gray-600 shadow md:w-full text-gray-50">
					See prayer request from others and take some time to pray
				</div>
				<GroupedList group={data} Component={PrayerCard} inverseSort />
			</div>
		</Layout>
	);
};

export default PrayerListPage;
