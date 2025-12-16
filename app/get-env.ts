function isBrowser() {
  return typeof window !== "undefined";
}

// function getEnv() {
//   return isBrowser() ? window.ENV : process.env;
// }

function getEnv() {
  if (isBrowser()) {
    return window.ENV;
  }

  return {
    API_URL: process.env.API_URL,
    AIRTABLE_PAT: process.env.AIRTABLE_PAT,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  };
}

export default getEnv;
