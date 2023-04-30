import { Button, useColorMode } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
import {
  ChevronDoubleDownIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { Github, Linkedin } from "~/components/icons";
import { Link } from "@remix-run/react";
import VerticalLinedItem from "~/components/VerticalLinedItem";

export const meta: V2_MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dynamicColor = colorMode === "light" ? "black" : "white";

  return (
    <main className="relative flex min-h-screen min-w-full flex-col px-6 font-sans">
      <section className="relative flex h-screen w-full flex-col items-center justify-center pb-52">
        <h1 className="mx-5 text-3xl uppercase tracking-widest md:text-5xl lg:text-7xl">
          Akash Agarwal
        </h1>
        <p className="text-md mb-2 md:text-xl lg:text-2xl">
          Senior Front End Developer
        </p>
        <ul className="flex gap-3">
          <li>
            <Link to="https://www.linkedin.com/in/akash-fe" target="_black">
              <Linkedin fill={dynamicColor} className="md:h-8 md:w-8" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/akash191095" target="_black">
              <Github fill={dynamicColor} className="md:h-8 md:w-8" />
            </Link>
          </li>
        </ul>
        <ChevronDoubleDownIcon className="absolute top-3/4 h-10 w-10 animate-pulse md:h-12 md:w-12" />
      </section>
      <section className="py-5">
        <h2 className="pb-5 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
          Experience
        </h2>
        <VerticalLinedItem title="ULA">
          <ul className="list-disc">
            <li className="ml-5">
              <p>
                Built a ruleset-based system to automatically create discounts
                based on cart items, encouraging customers to discover products
                in addition to what they usually buy, which helped improve the
                average basket ratio
              </p>
            </li>
            <li className="ml-5">
              <p>
                Built the in-house gamification webpage which improved customer
                experience by providing versatile spin-the-wheel campaigns and
                allowed business teams to plan campaigns effectively reducing
                campaign launch time from 5 days to 10mins
              </p>
            </li>
            <li className="ml-5">
              <p>
                Debugged the code base to implement a fix which improved
                development environment performance by 40x which improved the
                productivity of engineers across teams
              </p>
            </li>
            <li className="ml-5">
              <p>
                Maintained, improved and tracked the PWA app which helped users
                with slow devices to still be able to use the product
              </p>
            </li>
          </ul>
        </VerticalLinedItem>
        <VerticalLinedItem title="Mool">
          <ul className="list-disc">
            <li className="ml-5">
              <p>
                Architected and built the mobile app in record time with most of
                the major features which allowed the quick release of the
                product
              </p>
            </li>
            <li className="ml-5">
              <p>
                Worked with the design team to make sure designs were
                technically feasible, and gave demos to stakeholders and
                partners to keep them updated on the progress
              </p>
            </li>
            <li className="ml-5">
              <p>The app got 200,000+ users within six weeks of launch</p>
            </li>
          </ul>
        </VerticalLinedItem>
        <VerticalLinedItem title="TheKnottyTales">
          <ul className="list-disc">
            <li className="ml-5">
              <p>
                Added vendor management and onboarding features to the admin
                dashboard which helped the sales team to easily onboard and
                manage new vendors allowing for better efficacy
              </p>
            </li>
            <li className="ml-5">
              <p>
                Added a new partnership program webpage allowing the marketing
                team to promote the new partnership launch effectively
              </p>
            </li>
            <li className="ml-5">
              <p>
                Built and added a new blog to the website which increased
                organic traffic and user engagement
              </p>
            </li>
          </ul>
        </VerticalLinedItem>
        <VerticalLinedItem title="Freelancer">
          <ul className="list-disc">
            <li className="ml-5">
              <p>
                Freelanced online primarily on platforms like Fiverr,
                Freelancer, and Upwork
              </p>
            </li>
            <li className="ml-5">
              <p>
                Did small tasks like fixing CSS bugs and PSD to HTML conversions
              </p>
            </li>
          </ul>
        </VerticalLinedItem>
      </section>
      <div className="fixed right-0 top-0">
        <Button onClick={toggleColorMode} className=" m-2">
          {colorMode === "light" ? (
            <LightBulbIcon className="h-5 w-5" />
          ) : (
            <LightBulbIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </main>
  );
}
