import { SimpleGrid } from '@chakra-ui/react';
import type { IRequest } from '~/types/global.definition';
import MasonryGridItem from '../MasonryGridItem';

const PinnedRequests = ({
	requests,
	updatePinned,
}: {
	requests: IRequest[];
	updatePinned: (request: IRequest, pinned: boolean) => void;
}) => (
	<SimpleGrid
		columns={3}
		gap={6}
		mb={2}
		mt={33}
		w="100%"
		alignItems={'flex-start'}
		className="pinned"
	>
		{requests.map(request => (
			<MasonryGridItem
				pinned={true}
				key={request.id}
				request={request}
				togglePin={(val: boolean) => updatePinned(request, val)}
			></MasonryGridItem>
		))}
	</SimpleGrid>
);

export default PinnedRequests;
