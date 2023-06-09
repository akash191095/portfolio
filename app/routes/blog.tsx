import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export async function loader() {
  return new Response(undefined, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=2678400",
    },
  });
}

export default function Blog() {
  return (
    <div className="flex  justify-center">
      <div className="prose w-full py-10 dark:prose-invert dark:prose-pre:bg-pre">
        <Outlet />
      </div>
    </div>
  );
}
