import { Stack } from "@chakra-ui/react";
import React from "react";
import { Conexiones } from "./Conexiones";
import { Header } from "./Header";
import { Perfil } from "./Perfil";

export const Home = () => {
  return (
    <>
      <Stack
        backgroundColor="#EDF2F7"
        ml="12rem"
        mr="12rem"
        borderRadius="20px"
        position="relative"
        bottom="8px"
      >
        <Header />
        <Perfil />
        <Conexiones />
      </Stack>
    </>
  );
};
