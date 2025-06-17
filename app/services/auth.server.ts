import { Authenticator } from 'remix-auth'
import { createCookieSessionStorage } from "@remix-run/node";
import { OAuth2Strategy, CodeChallengeMethod } from "remix-auth-oauth2";
import type { User } from './User.definition';
import type { OAuth2Tokens } from 'arctic';

// Create a session storage
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__c3pw",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3pwc3!"],
    secure: process.env.NODE_ENV === "production",
  },
});

export const authenticator = new Authenticator<User>();

authenticator.use(
  new OAuth2Strategy(
    {
      cookie: "oauth2", // Optional, can also be an object with more options
      clientId: process.env.OAUTH_CLIENT_ID!,
      clientSecret: process.env.OAUTH_CLIENT_SECRET!,

      authorizationEndpoint: process.env.OAUTH_URL + "/authorize",
      tokenEndpoint: process.env.OAUTH_URL + "/oauth/token",
      redirectURI: process.env.OAUTH_REDIRECT_URL!,
      // tokenRevocationEndpoint: process.env.OAUTH_URL + "/oauth2/revoke", // optional

      scopes: ["openid", "email", "profile"], // optional
      codeChallengeMethod: CodeChallengeMethod.S256, // optional
    },
    async ({ tokens, request }) => {
      // here you can use the params above to get the user and return it
      return await getUser(tokens, request);
    }
  ),
  // this is optional, but if you setup more than one OAuth2 instance you will
  // need to set a custom name to each one
  "prayer-provider"
);

export default authenticator

async function getUser(tokens: OAuth2Tokens, request: Request): Promise<User> {

  // Fetch user info from the provider's userinfo endpoint.  Assuming ChurchSuite supports this.
  const access_token = (tokens.data as { access_token?: string })?.access_token || '';
  if (!access_token) {
    throw new Error("Access token is missing");
  }
  const response = await fetch(process.env.OAUTH_URL +"/userinfo", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }

  const profile = await response.json();

  // Map the provider's profile to your User type
  return {
    id: profile.sub || profile.id,
    email: profile.email,
    name: profile.name,
    // add other fields as needed
  } as User;

  // For now, return a mock user
  //return { id: "12345", email: "test@user.com", name: "Test User" } as User;
}
