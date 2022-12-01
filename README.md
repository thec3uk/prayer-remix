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
-   [x] Add correct images & copy
-   [x] Add styled error handling pages (404 / 500)

## Future features

-   [x] Add a dark mode.
-   [ ] Empty prayer wall message
-   [ ] Add icons for prayer / praise on when showing prayers full screen
-   [ ] Hook up URL params to UI filters when viewing requests for a specific location
-   [ ] Get all content from Air Table / Prismic
-   [ ] Explore to show notifications (e.g cookie or local storage based?)
-   [x] Radio styled don't match design (1px border not 2px)
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
