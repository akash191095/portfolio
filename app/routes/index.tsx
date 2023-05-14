import AboutMe from "../containers/AboutMe";
import { Button } from "@chakra-ui/react";
import Exprience from "~/containers/Exprience";
import Hero from "~/containers/Hero";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({ title: "Akash Agarwal" });

export async function loader() {
  return new Response(undefined, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=82800",
    },
  });
}

export default function Index() {
  return (
    <main className="relative mb-32 flex min-h-screen min-w-full flex-col px-6 font-sans">
      <Hero />
      <AboutMe />
      <Exprience />
      <section className="py-24">
        <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
          Skills
        </h2>
        <div className="flex max-w-5xl flex-col items-start px-12 text-xl text-secondary-light dark:text-secondary-dark md:mx-auto md:flex-row md:items-center md:justify-between">
          <ul className="list-disc">
            <li className="mx-3">
              <p>Javascript</p>
            </li>
            <li className="mx-3">
              <p>TypeScript</p>
            </li>
            <li className="mx-3">
              <p>React.js</p>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="mx-3">
              <p>Next.js</p>
            </li>
            <li className="mx-3">
              <p>Remix.run</p>
            </li>
            <li className="mx-3">
              <p>Gatsby.js</p>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="mx-3">
              <p>Material UI</p>
            </li>
            <li className="mx-3">
              <p>Redux</p>
            </li>
            <li className="mx-3">
              <p>React Hooks</p>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="mx-3">
              <p>React Context</p>
            </li>
            <li className="mx-3">
              <p>HTML 5</p>
            </li>
            <li className="mx-3">
              <p>CSS 3</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
          Contact Form
        </h2>
        <Link
          to="https://docs.google.com/forms/d/17fecXpY0G64QABPcjp_o8Vsf5DzErFWD6gH-6mJZVGg"
          target="_blank"
        >
          <Button>Link to Google Form</Button>
        </Link>
      </section>
    </main>
  );
}
