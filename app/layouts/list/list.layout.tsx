import BoxLink from '~/components/boxLink';
import Layout from '~/components/Layout';
import List from '~/components/List';
import PrayerCard from '~/components/PrayerCard';
import type { IListProps } from './list.definition';

const ListLayout = ({ requests }: IListProps) => {
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
				<List group={requests} Component={PrayerCard} inverseSort />
			</div>
		</Layout>
	);
};

export default ListLayout;
