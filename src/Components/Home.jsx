import { Stack } from "@chakra-ui/react";
import React from "react";
import { Conexiones } from "./Conexiones";
import { Header } from "./Header";
import { Perfil } from "./Perfil";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Stack
        className="home"
        zIndex={99999}
        borderLeftRadius="80px"
        position="relative"
        backgroundColor="#EDF2F7"
      >
        <Header />
        <Perfil />
        <Conexiones />
      </Stack>
    </>
  );
};
