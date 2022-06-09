import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineCall } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'
import { GiPlainCircle } from 'react-icons/gi'
import * as API from '../services/setting'
import { useState, useEffect } from 'react'

const AgendaConexiones = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    API.getAllPlayers().then((data) => {
      setPlayers(data)
    })
  }, [])
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      borderRadius="20px"
      width="85%"
      paddingBottom="40px"
      marginLeft="30px"
    >
      <Box padding={3}>
        <Text
          fontSize="20px"
          fontWeight="bold"
          position="relative"
          right="100px"
          paddingLeft="50px"
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
          padding={2}
        >
          <Box width="180px">
            <Text fontSize="15"> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text fontSize="15"> Llamar</Text>
            <Text fontSize="13" color="grey">
              Descuento temporada
            </Text>
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
          padding={2}
        >
          <Box width="180px">
            <Text fontSize="15">{players.name}</Text>
          </Box>
          <Box pl={4}>
            <Text fontSize="15"> Llamar</Text>
            <Text fontSize="13" color="grey">
              Descuento temporada
            </Text>
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
          padding={2}
        >
          <Box width="180px">
            <Text fontSize="15"> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text fontSize="15"> Llamar</Text>
            <Text fontSize="13" color="grey">
              Descuento temporada
            </Text>
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
          padding={2}
        >
          <Box width="180px">
            <Text fontSize="15"> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text fontSize="15"> Llamar</Text>
            <Text fontSize="13" color="grey">
              Descuento temporada
            </Text>
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
          padding={2}
        >
          <Box width="180px">
            <Text fontSize="15"> Andres Camilo Melo Vargas</Text>
          </Box>
          <Box pl={4}>
            <Text fontSize="15"> Llamar</Text>
            <Text fontSize="13" color="grey">
              Descuento temporada
            </Text>
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
  )
}

export default AgendaConexiones
