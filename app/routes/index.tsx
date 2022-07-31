import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import BoxLink from '~/components/boxLink';
import GroupedList from '~/components/groupedList';
import Layout from '~/components/layout';
import PrayerCard from '~/components/prayerCard';

const Menu = () => {
	return (
		<div className="relative">
			{/* <BoxLink to={"/meetup"} title={"schedule a prayer meetup"} /> */}
			<BoxLink to={'/upcoming'} title={'prayer meetings'} />
			<BoxLink title="request a prayer" to="/request" />
			{/* <BoxLink to={"/list"} title={"public prayers"} /> */}
			<BoxLink to={'/inspiration'} title={'inspiration'} />
		</div>
	);
};

interface IPrayerRoomProps {
	data: IPrayer[];
}

export interface IPrayer {
	name: string;
	prayer: string;
	title: string;
	type: string;
	created_at: string;
	id: string;
}

const PrayerRoomPage = ({ data }: IPrayerRoomProps) => {
	return (
		<Layout
			title={'...a time to be silent and a time to speak...'}
			isHome={true}
			showsubTitle={true}
			menu={<Menu />}
		>
			<div className="hidden md:block">
				<GroupedList group={data} Component={PrayerCard} inverseSort />
			</div>
		</Layout>
	);
};

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

export default function Index() {
	const allData = useLoaderData();
	return <PrayerRoomPage data={allData} />;
}
