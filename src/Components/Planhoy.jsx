import { Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { MdArrowForwardIos, MdOutlineCall } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";

export const Planhoy = () => {
  return (
    <Stack width="90%" position="relative" bottom="50px">
      {/* title */}
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        pb={4}
        position="relative"
        bottom="15px"
        right="20px"
      >
        <Text fontSize="40px">Tu plan de hoy</Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text>Ir a la gestion de llamados</Text>
          <MdArrowForwardIos />
        </Box>
      </Stack>

      {/* container cards */}
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        gap="30px"
        pr="40px"
      >
        {/* card1 */}
        <Stack
          width="300px"
          backgroundColor="white"
          borderRadius="20px"
          padding={4}
          flexDirection="row"
          justifyContent="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="130px"
              height="130px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1.5rem"
                width="160px"
                height="160px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="50px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={4}>
            <Text>Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
        {/* card 2 */}
        <Stack
          width="300px"
          backgroundColor="white"
          borderRadius="20px"
          padding={4}
          flexDirection="row"
          justifyContent="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="130px"
              height="130px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1.5rem"
                width="160px"
                height="160px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="50px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={4}>
            <Text>Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>

        {/* card 3 */}
        <Stack
          width="300px"
          backgroundColor="white"
          borderRadius="20px"
          padding={4}
          flexDirection="row"
          justifyContent="center"
          position="relative"
          bottom="15px"
          right="160"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="130px"
              height="130px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1.5rem"
                width="160px"
                height="160px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="50px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={4}>
            <Text>Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="22px" />
                <Text fontSize="22px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
