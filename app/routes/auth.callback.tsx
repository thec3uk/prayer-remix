import { redirect, type LoaderFunction } from "@remix-run/node";
import authenticator, { sessionStorage } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    let user = await authenticator.authenticate("prayer-provider", request);
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

