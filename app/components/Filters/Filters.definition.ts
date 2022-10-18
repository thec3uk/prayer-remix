import type { ILocation } from '~/types/global.definition';

export interface IFilterOptions {
	location: string;
	type: string;
}

export interface IFiltersProps {
	initialFilters: IFilterOptions;
	locations: ILocation[];
	onChange: (opts: IFilterOptions) => void;
}
