import type { ILocation, IUserProfile } from '~/types/global.definition';

export type IRequestForm = {
	name?: string;
	prayer?: string;
	location?: string;
	type: 'prayer' | 'praise';
};

export interface IRequestLayoutProps {
	locations: ILocation[];
	user: IUserProfile,
}
