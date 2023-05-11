import { Button, useColorMode } from "@chakra-ui/react";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <LightBulbIcon className="h-5 w-5" />
        ) : (
          <LightBulbIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
