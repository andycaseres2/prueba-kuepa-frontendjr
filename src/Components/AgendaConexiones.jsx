import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";

const AgendaConexiones = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      borderRadius="20px"
      width="100%"
      paddingBottom="40px"
    >
      <Box padding={3}>
        <Text
          fontSize="20px"
          fontWeight="bold"
          position="relative"
          right="100px"
        >
          Conexiones de agenda para hoy
        </Text>
      </Box>
      <Stack width="100%">
        {/* USERS */}
        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around"
          backgroundColor="blue.100"
        >
          <Box width="180px">
            <Text> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text> Llamar</Text>
            <Text>Descuento temporada</Text>
          </Box>
          <Box
            width="120px"
            display="flex"
            justifyContent="space-around"
            pl={4}
          >
            <GiPlainCircle />
            <MdOutlineCall />
            <BsChatLeftText />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around"
          backgroundColor="blue.100"
        >
          <Box width="180px">
            <Text> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text> Llamar</Text>
            <Text>Descuento temporada</Text>
          </Box>
          <Box
            width="120px"
            display="flex"
            justifyContent="space-around"
            pl={4}
          >
            <GiPlainCircle />
            <MdOutlineCall />
            <BsChatLeftText />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around"
          backgroundColor="blue.100"
        >
          <Box width="180px">
            <Text> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text> Llamar</Text>
            <Text>Descuento temporada</Text>
          </Box>
          <Box
            width="120px"
            display="flex"
            justifyContent="space-around"
            pl={4}
          >
            <GiPlainCircle />
            <MdOutlineCall />
            <BsChatLeftText />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around"
          backgroundColor="blue.100"
        >
          <Box width="180px">
            <Text> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text> Llamar</Text>
            <Text>Descuento temporada</Text>
          </Box>
          <Box
            width="120px"
            display="flex"
            justifyContent="space-around"
            pl={4}
          >
            <GiPlainCircle />
            <MdOutlineCall />
            <BsChatLeftText />
          </Box>
        </Stack>

        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around"
          backgroundColor="blue.100"
        >
          <Box width="180px">
            <Text> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text> Llamar</Text>
            <Text>Descuento temporada</Text>
          </Box>
          <Box
            width="120px"
            display="flex"
            justifyContent="space-around"
            pl={4}
          >
            <GiPlainCircle />
            <MdOutlineCall />
            <BsChatLeftText />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AgendaConexiones;
