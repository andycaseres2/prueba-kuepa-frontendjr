import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export const NavbarLeft = () => {
  return (
    <>
      <Stack
        width="20rem"
        height="100%"
        backgroundColor="#1A365D"
        zIndex={1}
        position="absolute"
      >
        <Text>Logo</Text>
      </Stack>
    </>
  );
};
