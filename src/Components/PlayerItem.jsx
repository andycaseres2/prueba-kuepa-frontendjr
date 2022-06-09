import React from 'react'
import '../styles/playeritem.css'
import { Box, Stack, Text } from '@chakra-ui/react'
import { MdOutlineCall } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'
import { GiPlainCircle } from 'react-icons/gi'

export const PlayerItem = (player) => {
  return (
    <Stack
      className="containerangenda"
      width="100%"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      backgroundColor="blue.100"
      paddingLeft={2}
    >
      <Text
        className="lineaagenda"
        width="5px"
        height="60px"
        backgroundColor="red.400"
        position="relative"
        right="70px"
      ></Text>
      <Box
        width="20%"
        className="header-contact"
        position="relative"
        right="30px"
      >
        <Text fontSize="15">{player.name}</Text>
      </Box>
      <Box className="llamar" pl={4} position="relative" right="20px">
        <Text fontSize="15"> Llamar</Text>
        <Text fontSize="13" color="grey">
          Descuento temporada
        </Text>
      </Box>
      <Box
        className="icons"
        width="120px"
        display="flex"
        justifyContent="space-around"
        pl={4}
      >
        <GiPlainCircle color="orange" />
        <MdOutlineCall />
        <BsChatLeftText />
      </Box>
    </Stack>
  )
}
