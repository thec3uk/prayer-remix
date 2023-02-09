import type { IRequest } from '~/types/global.definition';

export interface IFeaturePrayerCardProps {
	data: IRequest;
	pinned: boolean;
	togglePin: (val: boolean) => void;
}
