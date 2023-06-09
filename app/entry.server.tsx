import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import type { EntryContext } from "@remix-run/node";
import { LocaleContextProvider } from "./lib/LocaleProvider";
import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import { Response } from "@remix-run/node";
import createEmotionCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import isbot from "isbot";
import { parseAcceptLanguage } from "intl-parse-accept-language";
import { renderToPipeableStream } from "react-dom/server";

const ABORT_DELAY = 5000;

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
export default handleRequest;

const handleBotRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  new Promise((resolve, reject) => {
    let didError = false;
    const emotionCache = createEmotionCache({ key: "css" });
    const acceptLanguage = request.headers.get("accept-language");
    const locales = parseAcceptLanguage(acceptLanguage, {
      validate: Intl.DateTimeFormat.supportedLocalesOf,
    });
    const { pipe, abort } = renderToPipeableStream(
      <EmotionCacheProvider value={emotionCache}>
        <LocaleContextProvider locales={locales}>
          <RemixServer context={remixContext} url={request.url} />
        </LocaleContextProvider>
      </EmotionCacheProvider>,
      {
        onAllReady: () => {
          const reactBody = new PassThrough();
          const emotionServer = createEmotionServer(emotionCache);

          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          reactBody.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(reactBody);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) =>
  new Promise((resolve, reject) => {
    let didError = false;
    const emotionCache = createEmotionCache({ key: "css" });
    const acceptLanguage = request.headers.get("accept-language");
    const locales = parseAcceptLanguage(acceptLanguage, {
      validate: Intl.DateTimeFormat.supportedLocalesOf,
    });

    const { pipe, abort } = renderToPipeableStream(
      <EmotionCacheProvider value={emotionCache}>
        <LocaleContextProvider locales={locales}>
          <RemixServer context={remixContext} url={request.url} />
        </LocaleContextProvider>
      </EmotionCacheProvider>,
      {
        onShellReady: () => {
          const reactBody = new PassThrough();
          const emotionServer = createEmotionServer(emotionCache);

          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          reactBody.pipe(bodyWithStyles);

          responseHeaders.set("Content-Type", "text/html");
          responseHeaders.set(
            "Cache-Control",
            "s-maxage=3600, stale-while-revalidate=82800"
          );

          resolve(
            new Response(bodyWithStyles, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(reactBody);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
