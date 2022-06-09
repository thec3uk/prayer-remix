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
	data: {
		allAirtable: {
			group: Array<IGroup>;
		};
	};
}

export interface IPrayer {
	name: string;
	prayer: string;
	title: string;
	type: string;
}

export interface IGroup {
	edges: Array<{
		node: {
			data: IPrayer;
			id: string;
		};
	}>;
	fieldValue: string;
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
				<GroupedList
					group={data.allAirtable.group}
					Component={PrayerCard}
					inverseSort
				/>
			</div>
		</Layout>
	);
};

export default function Index() {
	return (
		<PrayerRoomPage
			data={{
				allAirtable: {
					group: [
						{
							edges: [
								{
									node: {
										data: {
											name: 'name',
											prayer: 'prayer',
											title: 'title',
											type: 'prayer',
										},
										id: '1',
									},
								},
							],
							fieldValue: 'fieldValue',
						},
					],
				},
			}}
		/>
	);
}
