import type { LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import { fetchSettings } from "~/api/airTableApi";
import getEnv from "~/get-env";
// import type { ISetting } from "~/types/global.definition";
import MangagePreferences from "~/layouts/manage-preferences/manage-preferences.layout";

export const loader: LoaderFunction = async () => {
  const env = getEnv();
  const settings = await fetchSettings(
    env.AIRTABLE_PAT as string,
    env.API_URL as string
  );
  return { settings };
};

export default function AboutPage() {
  //   const { settings } = useLoaderData<{ settings: ISetting[] }>();

  return <MangagePreferences />;
}
