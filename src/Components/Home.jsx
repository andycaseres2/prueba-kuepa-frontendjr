import { Stack } from "@chakra-ui/react";
import React from "react";
import { Conexiones } from "./Conexiones";
import { Header } from "./Header";
import { Perfil } from "./Perfil";

export const Home = () => {
  return (
    <>
      <Stack backgroundColor="#EDF2F7" paddingLeft="15rem" paddingRight="15rem">
        <Header />
        <Perfil />
        <Conexiones />
      </Stack>
    </>
  );
};
