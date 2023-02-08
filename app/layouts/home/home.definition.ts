import type { IBibleVerse, ISetting } from '~/types/global.definition';

export interface IHomeProps {
	link: ISetting;
	verses: IBibleVerse[];
	subTitle: string;
	card: {
		title: string;
		subTitle: string;
		text: string;
		href: string;
	};
}
