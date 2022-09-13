import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { IRequest } from '~/types/global.definition';
import type { IGroupedListProps } from './List.definition';

dayjs.extend(customParseFormat);

const compare = (
	first: IRequest,
	second: IRequest,
	inverseSort: any
): number => {
	const firstDate = dayjs(first.created_at);
	const secondDate = dayjs(second.created_at);

	if (firstDate === secondDate) return 0;
	if (inverseSort) {
		if (firstDate > secondDate) return -1;
		if (firstDate < secondDate) return 1;
	} else {
		if (firstDate > secondDate) return 1;
		if (firstDate < secondDate) return -1;
	}
	return 0;
};

const List = ({
	group,
	Component,
	inverseSort = false,
	filterFn = item => true,
}: IGroupedListProps) => {
	return (
		<div className="py-2 space-y-8 overflow-y-scroll">
			{group
				.sort((a, b) => compare(a, b, inverseSort))
				.map((prayer: IRequest) => {
					return (
						<div
							key={prayer.id}
							className="mx-4 rounded shadow md:bg-gray-50 md:p-4"
						>
							<h3 className="mb-4 text-xl text-gray-900">
								{prayer.created_at}
							</h3>
							<div className="relative grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3">
								<Component key={prayer.id} data={prayer} />
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default List;
