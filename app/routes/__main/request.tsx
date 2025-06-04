import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchLocations } from "~/api/airTableApi";
import getEnv from "~/get-env";
import RequestLayout from "~/layouts/request/request.layout";
import type { ILocation } from "~/types/global.definition";

export const loader: LoaderFunction = async () => {
  const env = getEnv();

  return await fetchLocations(
    env.AIRTABLE_PAT as string,
    env.API_URL as string
  );
};

const PrayerRequestPage = () => {
  const locations = useLoaderData<ILocation[]>();
  return <RequestLayout locations={locations}></RequestLayout>;
};

export default PrayerRequestPage;
