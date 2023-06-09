import {
  MemoryCache,
  fetchResolver,
  fsResolver,
  imageLoader,
} from "remix-image/server";

import type { LoaderFunction } from "@remix-run/node";
import type { Resolver } from "remix-image/server";
import { sharpTransformer } from "remix-image-sharp";

export const myResolver: Resolver = async (asset, url, options, basePath) => {
  if (asset.startsWith("/") && (asset.length === 1 || asset[1] !== "/")) {
    return fsResolver(asset, url, options, basePath);
  } else {
    return fetchResolver(asset, url, options, basePath);
  }
};

const config = {
  selfUrl: "http://localhost:3000",
  cache: new MemoryCache(),
  resolver: myResolver,
  transformer: sharpTransformer,
};

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request);
};
