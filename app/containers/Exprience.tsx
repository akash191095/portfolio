import VerticalLinedItem from "~/components/VerticalLinedItem";
import UlaLogo from "../icons/ula.png";
import MoolLogo from "../icons/mool.svg";
import MoolLogoLight from "../icons/mool-light.svg";
import TKTLogo from "../icons/knotty.png";
import WorkLogo from "../icons/work.png";
import { useColorMode } from "@chakra-ui/react";

export default function Exprience() {
  const { colorMode } = useColorMode();
  return (
    <section className="py-24">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Experience
      </h2>
      <VerticalLinedItem title="ULA" logo={UlaLogo} logoAlt="Ula">
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Built a ruleset-based system to automatically create discounts
              based on cart items, encouraging customers to discover products in
              addition to what they usually buy, which helped improve the
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
      <VerticalLinedItem
        title="Mool"
        logo={colorMode === "light" ? MoolLogoLight : MoolLogo}
        logoAlt="Mool"
      >
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Architected and built the mobile app in record time with most of
              the major features which allowed the quick release of the product
            </p>
          </li>
          <li className="ml-5">
            <p>
              Worked with the design team to make sure designs were technically
              feasible, and gave demos to stakeholders and partners to keep them
              updated on the progress
            </p>
          </li>
          <li className="ml-5">
            <p>The app got 200,000+ users within six weeks of launch</p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem
        title="TheKnottyTales"
        logo={TKTLogo}
        logoAlt="The knotty tales"
      >
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Added vendor management and onboarding features to the admin
              dashboard which helped the sales team to easily onboard and manage
              new vendors allowing for better efficacy
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
              Built and added a new blog to the website which increased organic
              traffic and user engagement
            </p>
          </li>
        </ul>
      </VerticalLinedItem>
      <VerticalLinedItem
        title="Freelancer"
        logo={WorkLogo}
        logoAlt="freelancer"
      >
        <ul className="list-disc">
          <li className="ml-5">
            <p>
              Freelanced online primarily on platforms like Fiverr, Freelancer,
              and Upwork
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
  );
}
