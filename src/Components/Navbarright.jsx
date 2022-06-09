import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import * as API from '../services/setting'
import { useState, useEffect } from 'react'
import { NavRightItem } from './NavRightItem'

export const Navbarright = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    API.getAllProPlayers().then((data) => {
      setPlayers(data)
    })
  }, [])

  const newPlayers = players.slice(0, 9)
  console.log(newPlayers)
  return (
    <div>
      <Stack
        width="10rem"
        height="101%"
        backgroundColor="#1A365D"
        position="relative"
        bottom="8px"
        borderLeftRadius="80px"
        zIndex={99999999}
        justifyContent="center"
        alignItems="center"
      >
        {newPlayers.map((player) => (
          <NavRightItem key={player.account_id} {...player} />
        ))}
      </Stack>
    </div>
  )
}
