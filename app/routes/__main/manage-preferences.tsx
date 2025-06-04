// import type { LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";

// import { fetchUserProfile } from "~/api/airTableApi";
// import getEnv from "~/get-env";

import ManagePreferences from "~/layouts/manage-preferences/manage-preferences.layout";
// import type { IUserProfile } from "~/types/global.definition";

// export const loader: LoaderFunction = async () => {
//   const env = getEnv();
//   const profile = await fetchUserProfile(
//     env.API_URL as string,
//     env.AUTH_TOKEN as string
//   );
//   return { profile };
// };

export default function ManagePreferencesPage() {
  // const { profile } = useLoaderData<{ profile: IUserProfile }>();
  // return <ManagePreferences profile={profile} />;
  return <ManagePreferences />;
}
