import React from "react";
import { Stack, Input, Text, Box, Button } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <Stack
        pt="40px"
        pb="40px"
        pl="50px"
        pr="250px"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Input width="300px" placeholder="Search..." borderColor="grey" />
          <Box paddingLeft={4}>
            <Button>
              <FaFilter fontSize="20px" />
            </Button>
          </Box>
        </Box>
        <Box>
          <Text>Calendario</Text>
        </Box>
      </Stack>
    </>
  );
};
