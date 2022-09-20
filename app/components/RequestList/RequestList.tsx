import { groupBy } from 'lodash';
import type { IRequest } from '~/types/global.definition';
import type { IRequestListProps } from './RequestList.definition';

const RequestList = ({ requests, Component }: IRequestListProps) => {
	const groups = groupBy(requests, 'created_at');
	return (
		<div className="py-2 space-y-8 overflow-y-scroll">
			{Object.keys(groups).map((key: string, idx: number) => {
				return (
					<div
						key={idx}
						className="mx-4 rounded shadow md:bg-gray-50 md:p-4"
					>
						<h3 className="mb-4 text-xl text-gray-900">
							{groups[key][0].created_at}
						</h3>
						<div className="relative grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
							{groups[key].map((request: IRequest) => (
								<Component key={request.id} data={request} />
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RequestList;
