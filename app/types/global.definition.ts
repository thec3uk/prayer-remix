export interface IRequest {
	name: string;
	prayer: string;
	title: string;
	type: string;
	created_at: string;
	count: number;
	id: string;
}

export type IRequestForm = {
	title?: string;
	name?: string;
	prayer?: string;
	type: string;
};

export interface ISettings {
	groupCallEnabled: boolean;
	buttonText: string;
}
