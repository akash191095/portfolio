import { Button, useColorMode } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
import {
  ChevronDoubleDownIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { Github, Linkedin } from "~/components/icons";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dynamicColor = colorMode === "light" ? "black" : "white";

  return (
    <main className="relative flex min-h-screen min-w-full flex-col font-sans">
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
      <section>hi</section>
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
