import type { ILocation } from '~/types/global.definition';

export type IRequestForm = {
	title?: string;
	name?: string;
	prayer?: string;
	location?: string;
	type: 'prayer' | 'praise';
};

export interface IRequestLayoutProps {
	locations: ILocation[];
}
