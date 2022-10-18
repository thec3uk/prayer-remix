import type { ILocation } from '~/types/global.definition';

export type IRequestForm = {
	name?: string;
	prayer?: string;
	location?: string;
	type: 'prayer' | 'praise';
};

export interface IRequestLayoutProps {
	locations: ILocation[];
}
