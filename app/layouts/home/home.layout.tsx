import { groupBy } from 'lodash';
import BoxLink from '~/components/boxLink';
import Layout from '~/components/Layout';
import RequestList from '~/components/RequestList';
import PrayerCard from '~/components/PrayerCard';
import type { IPrayerRoomProps } from './home.definition';

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

const HomeLayout = ({ data }: IPrayerRoomProps) => {
	return (
		<Layout
			title={'...a time to be silent and a time to speak...'}
			isHome={true}
			showsubTitle={true}
			menu={<Menu />}
		>
			<div className="hidden md:block">
				<RequestList requests={data} Component={PrayerCard} />
			</div>
		</Layout>
	);
};

export default HomeLayout;
