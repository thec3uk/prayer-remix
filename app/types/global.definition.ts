import type { ICardProps } from '~/components/Card/Card.definition';

export interface IRequest {
	name: string;
	prayer: string;
	title: string;
	type: 'prayer' | 'praise';
	created_at: string;
	fromNow: string;
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

export interface ISetting {
	enabled: boolean;
	text: string;
	name: string;
}

export interface ILocation {
	id: string;
	name: string;
}

export interface IHomePageContent {
	subTitle: string;
	card: ICardProps;
}

export interface IBibleVerse {
	verse: string;
	content: string;
}
