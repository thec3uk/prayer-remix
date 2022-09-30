export interface IRequest {
	name: string;
	prayer: string;
	title: string;
	type: 'prayer' | 'praise';
	created_at: string;
	count: number;
	id: string;
	location: string;
	flagged: boolean;
}

export type IRequestForm = {
	title?: string;
	name?: string;
	prayer?: string;
	type: string;
	location?: string;
};

export interface ISettings {
	groupCallEnabled: boolean;
	buttonText: string;
}

export interface ILocation {
	name: string;
}
