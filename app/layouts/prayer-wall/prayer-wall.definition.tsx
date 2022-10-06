import type { ILocation, IRequest } from '~/types/global.definition';

export interface IPrayerWallProps {
	requests: IRequest[];
	locations: ILocation[];
}
