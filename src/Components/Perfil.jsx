import { Box, Stack, Text } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

export const Perfil = () => {
  return (
    <div>
      <Stack>
        <Text fontSize="40px">Soy, Name</Text>
        <Stack
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          width="70%"
          height="150px"
          backgroundColor="white"
          borderRadius="20px"
        >
          <Stack>
            <CircularProgress size="120px" value={50} color="red.400">
              <CircularProgressLabel>50%</CircularProgressLabel>
            </CircularProgress>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Box display="flex">
              <Box display="flex">
                <Text fontSize="15px">Leads obtenidos</Text>
                <Text fontSize="25px">50/100</Text>
              </Box>
            </Box>
            <Box display="flex">
              <Text fontSize="15px">Matriculas Finalizadas</Text>
              <Text fontSize="25px">10/20</Text>
            </Box>
            <Box display="flex">
              <Text fontSize="15px">Cola de llamados</Text>
              <Text fontSize="25px">50/100</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Text fontSize="20px">Info</Text>
        </Stack>
      </Stack>
    </div>
  )
}
