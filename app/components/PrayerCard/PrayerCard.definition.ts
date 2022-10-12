import type { IRequest } from '~/types/global.definition';

export interface IPrayerCardProps {
	data: IRequest;
	featureView?: boolean;
	onAmen?: (id: string, count: number) => void;
	onReport?: (id: string) => void;
}
