import PrayerCard from '~/components/PrayerCard';
import type { IRequest } from '~/types/global.definition';
import type { IPrayerRoomProps } from './home.definition';
import { Heading, Text } from '@chakra-ui/react';

const HomeLayout = ({ data: requests }: IPrayerRoomProps) => {
	return (
		<>
			<Heading>The Tim Creamer Prayer Room</Heading>
			<Text>Paragraph text</Text>
			{requests.map((request: IRequest) => (
				<PrayerCard data={request} key={request.id} />
			))}
		</>
	);
};

export default HomeLayout;
