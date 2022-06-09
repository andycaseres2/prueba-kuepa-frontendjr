import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

export const NavRightItem = (player) => {
  return (
    <Stack
      borderRadius="10px"
      backgroundColor="white"
      width="100px"
      height="85px"
    >
      <Text
        fontSize="10px"
        borderTopRadius="10px"
        backgroundColor="#718096"
        textAlign="right"
        p="5px 10px"
        color="white"
      >
        WHATSAPP
      </Text>
      <Box
        borderBottomRadius="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#2D3748"
        position="relative"
        bottom="10px"
      >
        <Text color="white" textAlign="center" fontSize="20px" padding={2}>
          {player.name}
        </Text>
        <Text color="grey" fontSize="12px">
          {player.team_tag}
        </Text>
      </Box>
    </Stack>
  )
}
