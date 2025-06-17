import { json, type LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { fetchSettings } from "~/api/airTableApi";
import getEnv from "~/get-env";
import ManagePreferences from "~/layouts/manage-preferences/manage-preferences.layout";

export const loader: LoaderFunction = async ({request}) => {
      // Get user from session
    const session = await sessionStorage.getSession(request.headers.get("cookie"));
    const user = session.get("user") ?? null;

    // fetch user settings
  const env = getEnv();
  const settings = await fetchSettings(
    env.AIRTABLE_PAT as string,
    env.API_URL as string
  );
  return { settings, user };
};

export default function AboutPage() {
  const { user, settings } = useLoaderData<typeof loader>();

  return <ManagePreferences settings={settings} user={user}/>;
}
