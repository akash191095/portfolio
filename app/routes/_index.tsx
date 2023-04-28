import { Button, useColorMode } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export const meta: V2_MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main className="relative flex min-h-screen min-w-full font-sans">
      <section className="mb-60 flex min-h-full w-full flex-col items-center justify-center">
        <h1 className="text-6xl uppercase tracking-widest">Akash Agarwal</h1>
        <p>Senior Front End Developer</p>
        <div className="fixed right-0 top-0">
          <Button onClick={toggleColorMode} className="m-3">
            {colorMode === "light" ? (
              <LightBulbIcon className="h-6 w-6" />
            ) : (
              <LightBulbIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </section>
    </main>
  );
}
