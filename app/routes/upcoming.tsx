import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchSettings } from '~/api/airTableApi';
import type { IPrayerMeetupPageProps } from '~/layouts/upcoming/upcoming.definition';
import UpcomingLayout from '~/layouts/upcoming/upcoming.layout';

export const loader: LoaderFunction = async () => {
	return await fetchSettings();
};

export default function Upcoming() {
	const { groupCallEnabled, buttonText } =
		useLoaderData<IPrayerMeetupPageProps>();

	return (
		<UpcomingLayout
			groupCallEnabled={groupCallEnabled}
			buttonText={buttonText}
		/>
	);
}
