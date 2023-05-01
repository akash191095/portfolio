import { Button, useColorMode } from "@chakra-ui/react";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="fixed right-0 top-0">
      <Button onClick={toggleColorMode} className="m-2">
        {colorMode === "light" ? (
          <LightBulbIcon className="h-5 w-5" />
        ) : (
          <LightBulbIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
