import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { fetchLocations, fetchRequests } from "~/api/airTableApi";
import PrayerWallLayout from "~/layouts/prayer-wall/prayer-wall.layout";
import type { ILocation, IRequest } from "~/types/global.definition";
import getEnv from "~/get-env";

export const loader: LoaderFunction = async () => {
  const env = getEnv();
  const requests = await fetchRequests({}, env.AIRTABLE_PAT as string, env.API_URL as string);
  const locations = await fetchLocations(env.AIRTABLE_PAT as string, env.API_URL as string);

  return { requests, locations };
};

const PrayerWall = () => {
  const data = useLoaderData<{
    requests: IRequest[];
    locations: ILocation[];
  }>();
  return (
    <PrayerWallLayout
      requests={data.requests}
      locations={data.locations}
    ></PrayerWallLayout>
  );
};

export default PrayerWall;
