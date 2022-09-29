import PrayerCard from '~/components/PrayerCard';
import type { IListProps } from './list.definition';

const ListLayout = ({ requests }: IListProps) => {
	return (
		<div className="">
			<div className="w-screen px-4 py-2 mb-8 font-sans text-lg bg-gray-600 shadow md:w-full text-gray-50">
				See prayer request from others and take some time to pray
			</div>
		</div>
	);
};

export default ListLayout;
