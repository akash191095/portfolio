import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Linkedin, Github } from "~/components/icons";
import { Link } from "@remix-run/react";
import { useColorMode } from "@chakra-ui/react";

export default function Hero() {
  const { colorMode } = useColorMode();
  const dynamicColor = colorMode === "light" ? "black" : "white";

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center pb-52">
      <h1 className="text-3xl tracking-widest md:text-5xl lg:text-7xl">
        Hello! I am{" "}
        <span className="text-secondary-light dark:text-secondary-dark">
          Akash
        </span>
      </h1>
      <h2 className="text-md mb-3 mt-2 md:text-xl lg:text-2xl">
        A senior{" "}
        <span className="text-secondary-light dark:text-secondary-dark">{`<FrontEnd />`}</span>{" "}
        developer
      </h2>
      <ul className="flex gap-3">
        <li>
          <Link to="https://www.linkedin.com/in/akash-fe" target="_blank">
            <Linkedin fill={dynamicColor} className="md:h-8 md:w-8" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/akash191095" target="_blank">
            <Github fill={dynamicColor} className="md:h-8 md:w-8" />
          </Link>
        </li>
      </ul>
      <ChevronDoubleDownIcon className="absolute top-3/4 h-10 w-10 animate-pulse md:h-12 md:w-12" />
    </section>
  );
}