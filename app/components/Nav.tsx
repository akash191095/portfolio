import { HomeIcon, RectangleStackIcon } from "@heroicons/react/24/solid";

import { Button } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import { Link } from "@remix-run/react";

export default function Nav() {
  return (
    <nav className="fixed z-50 w-full bg-gray-100 p-2 dark:bg-gray-800">
      <ul className="flex gap-3">
        <li>
          <Link to="/">
            <Button variant="outline">
              <HomeIcon width={18} className="mr-2" />
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/blog" prefetch="render">
            <Button variant="outline">
              <RectangleStackIcon width={18} className="mr-2" />
              Blog
            </Button>
          </Link>
        </li>
        <li className="ml-auto">
          <ColorModeToggle />
        </li>
      </ul>
    </nav>
  );
}
