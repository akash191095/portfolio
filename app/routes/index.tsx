import AboutMe from "../containers/AboutMe";
import ContactMe from "~/containers/ContactMe";
import Exprience from "~/containers/Exprience";
import Hero from "~/containers/Hero";
import type { MetaFunction } from "@remix-run/node";
import OpenSource from "~/containers/OpenSource";
import Skills from "~/containers/Skills";
import { getListOfPRs } from "~/lib/github-client.server";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => ({ title: "Akash Agarwal" });

export async function loader() {
  const data = await getListOfPRs();
  const body = JSON.stringify({ prs: data });

  return new Response(body, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=82800",
      "Content-Type": "application/json",
    },
  });
}

export default function Index() {
  const { prs } = useLoaderData();

  return (
    <main className="relative mb-32 flex min-h-screen min-w-full flex-col px-6 font-sans">
      <Hero />
      <AboutMe />
      <Exprience />
      <OpenSource prs={prs} />
      <Skills />
      <ContactMe />
    </main>
  );
}
