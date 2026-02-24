import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  fetchHomePageContent,
  fetchResources,
  fetchSettings,
  fetchVerses,
} from "~/api/airTableApi";
import getEnv from "~/get-env";
import HomeLayout from "~/layouts/home/home.layout";
import type {
  IBibleVerse,
  IHomePageContent,
  IResource,
  ISetting,
} from "~/types/global.definition";

const WeeklyPrayerLink = "Weekly Meeting Link";

export const loader: LoaderFunction = async () => {
  const env = getEnv();
  const settings = await fetchSettings(env.AIRTABLE_PAT as string, env.API_URL as string);
  const upcomingMeeting = settings.find(
    (setting) => setting.name === WeeklyPrayerLink
  );
  const verses = await fetchVerses(env.AIRTABLE_PAT as string, env.API_URL as string);
  const home = await fetchHomePageContent(env.AIRTABLE_PAT as string, env.API_URL as string);
  const resources = await fetchResources(env.API_URL as string);
  const contentResources = resources.filter((r) => r.resource_type !== "section");
  const featuredResource = contentResources.length > 0
    ? contentResources[Math.floor(Math.random() * contentResources.length)]
    : undefined;
  return { upcomingMeeting, verses, home, featuredResource };
};

export default function Index() {
  const { upcomingMeeting, verses, home, featuredResource } = useLoaderData<{
    upcomingMeeting: ISetting;
    verses: IBibleVerse[];
    home: IHomePageContent;
    featuredResource?: IResource;
  }>();
  return (
    <HomeLayout
      link={upcomingMeeting}
      verses={verses}
      card={home.card}
      subTitle={home.subTitle}
      featuredResource={featuredResource}
    />
  );
}
