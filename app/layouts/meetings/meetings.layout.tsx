import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import type { IPrayerMeetupPageProps } from './meetings.definition';

const MeetingsLayout = ({
	groupCallEnabled,
	buttonText,
}: IPrayerMeetupPageProps) => {
	return (
		<Container>
			<VStack spacing="2">
				<Heading size="md">Meetings</Heading>
				<Text>See upcoming prayer meetups</Text>
				{groupCallEnabled && (
					<>
						<Heading as="h2" size="sm">
							Group Prayer
						</Heading>
						<Button
							as="a"
							size="xs"
							href="https://zoom.us/j/6218249928?pwd=MnhyenA2clIrS0IwNEZ5b3hGMldMZz09"
						>
							{buttonText}
						</Button>
					</>
				)}
			</VStack>
		</Container>
	);
};

export default MeetingsLayout;
