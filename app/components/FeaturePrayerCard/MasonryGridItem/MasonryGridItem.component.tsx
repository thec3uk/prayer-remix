import type { IRequest } from '~/types/global.definition';
import FeaturePrayerCard from '../FeaturePrayerCard.component';

const MasonryGridItem = ({ request }: { request: IRequest }) => (
	<div className={`grid-item grid-item-${request.id}`} key={request.id}>
		<FeaturePrayerCard data={request}></FeaturePrayerCard>
	</div>
);

export default MasonryGridItem;
