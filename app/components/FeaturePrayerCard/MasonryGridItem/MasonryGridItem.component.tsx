import type { IRequest } from '~/types/global.definition';
import FeaturePrayerCard from '../FeaturePrayerCard.component';

const MasonryGridItem = ({
	request,
	pinned,
	togglePin,
}: {
	request: IRequest;
	pinned?: boolean;
	togglePin?: (val: boolean) => void;
}) => (
	<div
		className={`${pinned ? '' : 'grid-item'} grid-item-${request.id}`}
		key={request.id}
	>
		<FeaturePrayerCard
			pinned={pinned}
			data={request}
			togglePin={togglePin}
		></FeaturePrayerCard>
	</div>
);

export default MasonryGridItem;
