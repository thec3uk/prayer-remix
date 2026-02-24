import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchResources } from "~/api/airTableApi";
import getEnv from "~/get-env";
import ResourcesLayout from "~/layouts/resources/resources.layout";
import type { IResource } from "~/types/global.definition";

export const loader: LoaderFunction = async () => {
  const env = getEnv();
  const resources = await fetchResources(env.API_URL as string);
  return { resources };
};

export default function Resources() {
  const { resources } = useLoaderData<{ resources: IResource[] }>();
  return <ResourcesLayout resources={resources} />;
}
