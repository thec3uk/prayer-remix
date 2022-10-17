# The Tim Creamer Prayer Room

## About

The Prayer Room app is a [Remix Docs](https://remix.run/docs) application. The application uses an [AirTable](https://airtable.com) API to provide data and store prayer requests.

It's deployed automatically via [Netlify](https://www.netlify.com/).

### Technologies / frameworks

-   React
-   Typescript
-   [Remix](https://remix.run/docs)
-   [Chakra UI](https://chakra-ui.com/)

# To Do List

## v1.0

-   [x] Navigation highlight
-   [x] Footer position full screen
-   [x] Refactor full screen mode changes to not impact the standard prayer card
-   [x] Scroll all requests on the full screen view
-   [x] Improve Home page layout on mobile. Hide main image and fix margins on "Join Us" card
-   [x] Restrict max width for Submit Request page on desktop
-   [x] Fix width for Logo on wide desktop view
-   [x] Ensure we are loading all requests on full screen view
-   [x] QA test site on Mobile, Tablet and Desktop
-   [ ] Add correct images & copy
-   [x] Add styled error handling pages (404 / 500)

## Future features

-   [ ] Add a dark mode.
-   [ ] Empty prayer wall message
-   [ ] Add icons for prayer / praise on when showing prayers full screen
-   [ ] Hook up URL params to UI filters when viewing requests for a specific location
-   [ ] Get all content from Air Table / Prismic
-   [ ] Explore to show notifications (e.g cookie or local storage based?)
-   [ ] Radio styled don't match design (1px border not 2px)
-   [ ] Bigger radio buttons on mobile.

## Technical Debt

-   [ ] Review application for optimisations
-   [ ] Filter prayer requests by location, type & archived in API calls
-   [ ] Standardise API calls / write an API client

# Getting started

Below are the instructions for getting started with a Remix applicaiton deployed via Netifly.

## Prerequisites

-   Node.js version (^14.17.0, or >=16.0.0)
-   npm 7 or greater
-   A code editor (VSCode is a nice one)

-   [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run build
# preview deployment
netlify deploy

# production deployment
netlify deploy --prod
```
