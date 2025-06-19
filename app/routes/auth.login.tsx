
import { redirect, type LoaderFunction } from "@remix-run/node";
import { authenticator, sessionStorage } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
/*
  let session = await sessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");

  // If the user is already authenticated redirect home
  if (!!user) return redirect("/");
*/
  // otherwise, authenticate the user

  //console.log("Authenticating user...");
  //try {
    let user = await authenticator.authenticate("prayer-provider", request);
   
  //} catch (error) {
    // Return validation errors or authentication errors
//    if (error instanceof Error) {
      //return error.message;
//    }

    // Re-throw any other errors (including redirects)
//    throw error;
//  }
};
