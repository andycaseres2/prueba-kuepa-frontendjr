import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Navbarright = () => {
  return (
    <div>
      <Stack
        width="16rem"
        height="100vh"
        backgroundColor="#1A365D"
        position="relative"
        bottom="8px"
        borderLeftRadius="80px"
        zIndex={99999999}
      >
        <Text>Rigeh</Text>
      </Stack>
    </div>
  );
};
