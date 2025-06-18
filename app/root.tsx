import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import Layout from "./components/Layout";
import styles from "~/styles/global.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import C3Theme from "./theme";
import Fonts from "./fonts";
import ErrorLayout from "./components/ErrorLayout";
import { ClientStyleContext, ServerStyleContext } from "~/lib/emotion/context";

export const meta: MetaFunction = () => ([
  { charset: "utf-8" },
  { title: "Tim Creamer Prayer Room" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
]);

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "preload",
      href: "/LogoBlack.png",
      as: "image",
      type: "image/png",
    },
    {
      rel: "preload",
      href: "/home-main.jpeg",
      as: "image",
      type: "image/jpeg",
    },
    {
      rel: "preload",
      href: "/home-card.jpeg",
      as: "image",
      type: "image/jpeg",
    },
    {
      rel: "preload",
      href: "/logomark-transparent.svg",
      as: "image",
      type: "image/svg+xml",
    },
  ];
}

export interface DocumentProps {
  children: React.ReactNode;
  title?: string;
  cookies: any;
  ENV: any;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorLayout error={error} />;
}

const Document = withEmotionCache(
  ({ children, title, cookies, ENV }: DocumentProps, emotionCache) => {
    const serverSyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    const colorModeManager =
      typeof cookies === "string"
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <script src="/masonryLayout.js"></script>
          <script
            async
            defer
            data-website-id="c9061907-a82b-4a6b-b3e0-ced2cbe43c8f"
            src="https://analytics.thec3.uk/script.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(ENV)}`,
            }}
          />
          {serverSyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <ColorModeScript initialColorMode={C3Theme.config.initialColorMode} />
          <ChakraProvider theme={C3Theme} colorModeManager={colorModeManager}>
            <Fonts />
            <VStack
              margin={"auto"}
              minH="100vh"
              minW={{ base: "none", lg: "100ch" }}
              maxW={"150ch"}
            >
              <SkipNavLink zIndex="skipLink">Skip to content</SkipNavLink>
              {children}
            </VStack>
          </ChakraProvider>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  }
);

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    cookies: request.headers.get("cookie") ?? "",
    ENV: {
      AIRTABLE_PAT: process.env.AIRTABLE_PAT,
      API_URL: process.env.API_URL,
      AUTH_TOKEN: process.env.AUTH_TOKEN,
    },
  });
};

export default function App(props: any) {
  const { cookies, ENV } = useLoaderData<typeof loader>();

  return (
    <Document cookies={cookies} ENV={ENV}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
