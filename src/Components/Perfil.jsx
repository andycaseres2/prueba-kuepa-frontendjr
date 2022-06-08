import { Box, Stack, Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import React from "react";

export const Perfil = () => {
  return (
    <>
      <Stack pb="100px" pl="50px">
        <Text fontSize="40px">Hola, Name</Text>
        <Stack flexDirection="row" alignItems="center">
          <Stack
            justifyContent="space-around"
            alignItems="center"
            flexDirection="row"
            width="50%"
            height="170px"
            backgroundColor="white"
            borderRadius="20px"
          >
            <Stack>
              <CircularProgress size="150px" value={50} color="red.400">
                <CircularProgressLabel>50%</CircularProgressLabel>
              </CircularProgress>
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              width="200px"
              position="relative"
              right="40px"
            >
              <Box display="flex">
                <Box display="flex">
                  <Text fontSize="18px" pr={4} pb={4}>
                    Leads obtenidos
                  </Text>
                  <Text fontWeight="bold" fontSize="28px">
                    50/100
                  </Text>
                </Box>
              </Box>
              <Box display="flex">
                <Text fontSize="18px">Matriculas Finalizadas</Text>
                <Text fontWeight="bold" fontSize="28px">
                  10/20
                </Text>
              </Box>
            </Stack>
            <Box
              display="flex"
              flexDirection="row"
              width="100px"
              position="relative"
              right="80px"
              bottom="38px"
            >
              <Text fontSize="18px" pr="30px">
                Cola de llamados
              </Text>
              <Text fontWeight="bold" fontSize="28px">
                50/100
              </Text>
            </Box>
          </Stack>
          <Stack paddingLeft="50px">
            <Stack
              width="300px"
              height="170px"
              backgroundColor="white"
              borderRadius="20px"
              padding="15px 20px 15px 20px"
              position="relative"
              bottom="3px"
            >
              <Text fontWeight="bold" fontSize="24px">
                Meta Grupal
              </Text>
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>Leads obtenidos</Text>
                  <Text>200/400</Text>
                </Box>
                <Progress value={50} colorScheme="orange" />
              </Box>
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>Leads obtenidos</Text>
                  <Text>50/100</Text>
                </Box>
                <Progress value={50} colorScheme="orange" />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
