import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
	fetchHomePageContent,
	fetchSettings,
	fetchVerses,
} from '~/api/airTableApi';
import HomeLayout from '~/layouts/home/home.layout';
import type {
	IBibleVerse,
	IHomePageContent,
	ISetting,
} from '~/types/global.definition';

const WeeklyPrayerLink = 'Weekly Meeting Link';

export const loader: LoaderFunction = async () => {
	const settings = await fetchSettings();
	const upcomingMeeting = settings.find(
		setting => setting.name === WeeklyPrayerLink
	);
	const verses = await fetchVerses();
	const home = await fetchHomePageContent();
	return { upcomingMeeting, verses, home };
};

export default function Index() {
	const { upcomingMeeting, verses, home } = useLoaderData<{
		upcomingMeeting: ISetting;
		verses: IBibleVerse[];
		home: IHomePageContent;
	}>();
	return (
		<HomeLayout
			link={upcomingMeeting}
			verses={verses}
			card={home.card}
			subTitle={home.subTitle}
		/>
	);
}
