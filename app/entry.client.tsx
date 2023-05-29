import { StrictMode, startTransition } from "react";

import { CacheProvider } from "@emotion/react";
import { LocaleContextProvider } from "./lib/LocaleProvider";
import { RemixBrowser } from "@remix-run/react";
import createEmotionCache from "@emotion/cache";
import { hydrateRoot } from "react-dom/client";

const locales = window.navigator.languages;

const hydrate = () => {
  const emotionCache = createEmotionCache({ key: "css" });

  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <CacheProvider value={emotionCache}>
          <LocaleContextProvider locales={locales as string[]}>
            <RemixBrowser />
          </LocaleContextProvider>
        </CacheProvider>
      </StrictMode>
    );
  });
};

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
