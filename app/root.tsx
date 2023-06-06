import { ChakraProvider, cookieStorageManagerSSR } from "@chakra-ui/react";
import { ClientStyleContext, ServerStyleContext } from "./context";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useContext, useEffect, useMemo } from "react";

import Nav from "./components/Nav";
import { PRODUCTION_URL } from "./constants";
import { cssBundleHref } from "@remix-run/css-bundle";
import remixImageStyles from "remix-image/remix-image.css";
import tailwindStylesheetUrl from "~/styles/tailwind.css";
import theme from "./theme";
import { withEmotionCache } from "@emotion/react";

interface DocumentProps {
  children: React.ReactNode;
}

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    { rel: "stylesheet", href: remixImageStyles },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  return {
    cookies: request.headers.get("cookie") ?? "",
    ENDPOINT_URL: process.env.ENDPOINT_URL ?? "localhost",
  };
};

function getColorMode(cookies: string) {
  const match = cookies.match(
    new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
  );
  return match == null ? void 0 : match[2];
}

// here we can set the default color mode. If we set it to null,
// there's no way for us to know what is the the user's preferred theme
// so the cient will have to figure out and maybe there'll be a flash the first time the user visits us.
const DEFAULT_COLOR_MODE: "dark" | "light" | null = "dark";

const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

const App = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
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
  }, [clientStyleData, emotionCache.sheet]);

  let { cookies, ENDPOINT_URL } = useLoaderData();

  // the client get the cookies from the document
  // because when we do a client routing, the loader can have stored an outdated value
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }

  // get and store the color mode from the cookies.
  // It'll update the cookies if there isn't any and we have set a default value
  let colorMode = useMemo(() => {
    let color = getColorMode(cookies);

    if (!color && DEFAULT_COLOR_MODE) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }

    return color;
  }, [cookies]);

  return (
    <html
      lang="en"
      {...(colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode },
      })}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Portfolio and blog of Senior Front-end Engineer Akash Agarwal"
        />
        {ENDPOINT_URL === PRODUCTION_URL ? (
          <script
            async
            src="https://analytics-web.onrender.com/script.js"
            data-website-id="486d2b2b-a732-4be7-a06e-d943abb48989"
          />
        ) : null}
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
      >
        <ChakraProvider
          colorModeManager={cookieStorageManagerSSR(cookies)}
          theme={theme}
        >
          <Nav />
          <div className="pt-[56px]">
            <Outlet />
          </div>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export default App;
