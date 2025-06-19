import { type LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import ManagePreferences from "~/layouts/manage-preferences/manage-preferences.layout";

export const loader: LoaderFunction = async ({request}) => {
      // Get user from session
    const session = await sessionStorage.getSession(request.headers.get("cookie"));
    const user = session.get("user") ?? null;
    return { user };
};

export default function AboutPage() {
  const { user } = useLoaderData<typeof loader>();

  return <ManagePreferences user={user}/>;
}
