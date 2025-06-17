import type { ILocation } from '~/types/global.definition';
import type { User } from '~/services/User.definition';

export type IRequestForm = {
	name?: string;
	prayer?: string;
	location?: string;
	type: 'prayer' | 'praise';
};

export interface IRequestLayoutProps {
	locations: ILocation[];
	user: User,
}
