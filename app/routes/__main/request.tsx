import { json, type LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { fetchLocations } from "~/api/airTableApi";
import getEnv from "~/get-env";
import RequestLayout from "~/layouts/request/request.layout";

export const loader: LoaderFunction = async ({ request }) => {
    // Get user from session
  const session = await sessionStorage.getSession(request.headers.get("cookie"));
  const user = session.get("user") ?? null;

    // Get locations 
  const env = getEnv();
   const locations = await fetchLocations(
    env.AIRTABLE_PAT as string,
    env.API_URL as string
  );

    return json({ user, locations });
};

const PrayerRequestPage = () => {
  const { user, locations } = useLoaderData<typeof loader>();

  return <RequestLayout locations={locations} user={user}></RequestLayout>;
};

export default PrayerRequestPage;
