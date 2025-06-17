import { json, type LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { fetchUserProfile } from "~/api/airTableApi";
import getEnv from "~/get-env";
import type { IUserProfile } from "~/types/global.definition";
import ManagePreferences from "~/layouts/manage-preferences/manage-preferences.layout";

export const loader: LoaderFunction = async ({request}) => {
      // Get user from session
    const session = await sessionStorage.getSession(request.headers.get("cookie"));
    const user = session.get("user") ?? null;

    // fetch user settings
  const env = getEnv();
  const profile = await fetchUserProfile(
    env.AIRTABLE_PAT as string,
    env.API_URL as string
  );
  return json({ profile, user });
};

export default function AboutPage() {
  const { user, settings } = useLoaderData<typeof loader>();

  return <ManagePreferences profile={profile} user={user}/>;
}
