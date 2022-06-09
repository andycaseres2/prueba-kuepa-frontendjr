import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import * as API from '../services/setting'
import { useState, useEffect } from 'react'
import { PlayerItem } from './PlayerItem'
import '../styles/agenda.css'

const AgendaConexiones = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    API.getAllProPlayers().then((data) => {
      setPlayers(data)
    })
  }, [])

  const newPlayers = players.slice(0, 5)

  return (
    <Stack
      className="container-agenda"
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
          className="title-agenda"
        >
          Conexiones de agenda para hoy
        </Text>
      </Box>

      {/* USERS */}

      {newPlayers.map((player) => (
        <PlayerItem key={player.account_id} {...player} />
      ))}
    </Stack>
  )
}

export default AgendaConexiones
