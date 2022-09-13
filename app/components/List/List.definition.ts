import type { IRequest } from '~/types/global.definition';

export interface IGroupedListProps {
	group: Array<IRequest>;
	Component: any;
	inverseSort?: boolean;
	filterFn?: (item: any) => boolean;
}
