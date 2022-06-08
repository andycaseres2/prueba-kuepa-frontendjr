import { Stack } from "@chakra-ui/react";
import React from "react";
import AgendaConexiones from "./AgendaConexiones";
import { Planhoy } from "./Planhoy";

export const Conexiones = () => {
  return (
    <div>
      <Stack flexDirection="row" width="100%">
        <Stack width="50%">
          <AgendaConexiones />
        </Stack>
        <Stack width="50%">
          <Planhoy />
        </Stack>
      </Stack>
    </div>
  );
};
