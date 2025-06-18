
import { redirect, type LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
    // Destroy the session and redirect to the home page.
    // Will not logout from the third-party provider.

    let session = await sessionStorage.getSession(request.headers.get("cookie"));
    return redirect("/", {
        headers: { "Set-Cookie": await sessionStorage.destroySession(session) },
    });
}