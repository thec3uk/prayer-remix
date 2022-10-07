import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchSettings } from '~/api/airTableApi';
import type { IPrayerMeetupPageProps } from '~/layouts/meetings/meetings.definition';
import MeetingsLayout from '~/layouts/meetings/meetings.layout';

export const loader: LoaderFunction = async () => {
	return await fetchSettings();
};

export default function Meetings() {
	const { groupCallEnabled, buttonText } =
		useLoaderData<IPrayerMeetupPageProps>();

	return (
		<MeetingsLayout
			groupCallEnabled={groupCallEnabled}
			buttonText={buttonText}
		/>
	);
}
