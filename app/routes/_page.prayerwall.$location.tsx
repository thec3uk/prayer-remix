import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { fetchRequests } from "~/api/airTableApi";
import PrayerWallLayout from "~/layouts/prayer-wall/prayer-wall.layout";
import type { IRequest } from "~/types/global.definition";
import invariant from "tiny-invariant";
import getEnv from "~/get-env";

export const loader: LoaderFunction = async ({ params }) => {
  const env = getEnv();
  invariant(params.location, "Expected params");
  const requests = await fetchRequests({ location: params.location }, env.AIRTABLE_PAT as string, env.API_URL as string);

  return { requests };
};

const LocationPrayerWall = () => {
  const data = useLoaderData<{
    requests: IRequest[];
  }>();
  return <PrayerWallLayout requests={data.requests}></PrayerWallLayout>;
};

export default LocationPrayerWall;
