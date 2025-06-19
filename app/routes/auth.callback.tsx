import { redirect, type LoaderFunction } from "@remix-run/node";
import { fetchUserProfile } from "~/api/airTableApi";
import getEnv from "~/get-env";
import authenticator, { sessionStorage } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    let user = await authenticator.authenticate("prayer-provider", request);

    // Try and lookup the user preference from our database
    const env = getEnv();
    const profile = await fetchUserProfile(
      user.username as string,
      env.AIRTABLE_PAT as string,
      env.API_URL as string
    );
    
    if (!!profile) {
      user.digestNotifications = profile.digestNotifications;
      user.responseNotifications = profile.responseNotifications;
    }

    // Store the user in the session cookie
    let session = await sessionStorage.getSession(
      request.headers.get("cookie")
    );
    session.set("user", user);

    // Redirect to the home page after successful login
    return redirect("/prayerwall", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    });
  } catch (error) {
    console.error("Callback error:", error);
    return redirect("/");
  }
  return redirect("/");
};

