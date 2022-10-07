import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchSettings, fetchVerses } from '~/api/airTableApi';
import HomeLayout from '~/layouts/home/home.layout';
import type { IBibleVerse, ISetting } from '~/types/global.definition';

const WeeklyPrayerLink = 'Weekly Meeting Link';

export const loader: LoaderFunction = async () => {
	const settings = await fetchSettings();
	const upcomingMeeting = settings.find(
		setting => setting.name === WeeklyPrayerLink
	);
	const verses = await fetchVerses();
	return { upcomingMeeting, verses };
};

export default function Index() {
	const { upcomingMeeting, verses } = useLoaderData<{
		upcomingMeeting: ISetting;
		verses: IBibleVerse[];
	}>();
	return <HomeLayout link={upcomingMeeting} verses={verses} />;
}
