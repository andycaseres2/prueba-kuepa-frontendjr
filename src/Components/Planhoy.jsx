import { Stack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { MdArrowForwardIos, MdOutlineCall } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'

export const Planhoy = () => {
  return (
    <Stack width="80%" position="relative" bottom="50px">
      {/* title */}
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        pb={4}
        position="relative"
        bottom="15px"
        right="20px"
      >
        <Text fontSize="30px">Tu plan de hoy</Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="15px">Ir a la gestion de llamados</Text>
          <MdArrowForwardIos />
        </Box>
      </Stack>

      {/* container cards */}
      <Stack
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        width="110%"
        gap="15px"
        position="relative"
        right="20px"
      >
        {/* card1 */}
        <Stack
          width="220px"
          backgroundColor="white"
          borderRadius="20px"
          padding="10px"
          flexDirection="row"
          justifyContent="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100px"
              height="100px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1rem"
                width="110px"
                height="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="30px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={2}>
            <Text fontSize="13px">Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
        {/* card 2 */}
        <Stack
          width="220px"
          backgroundColor="white"
          borderRadius="20px"
          padding="10px"
          flexDirection="row"
          justifyContent="center"
          position="relative"
          bottom="4px"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100px"
              height="100px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1rem"
                width="110px"
                height="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="30px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={2}>
            <Text fontSize="13px">Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>

        {/* Card 3 */}
        <Stack
          width="220px"
          backgroundColor="white"
          borderRadius="20px"
          padding="10px"
          flexDirection="row"
          justifyContent="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100px"
              height="100px"
              backgroundColor="purple"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                padding="1rem"
                width="110px"
                height="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  padding=".5rem"
                  backgroundColor="white"
                  borderRadius="100%"
                  fontSize="30px"
                  color="purple"
                  textAlign="center"
                >
                  30%
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack pl={2}>
            <Text fontSize="13px">Leads de primer contacto</Text>
            <Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCall fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsChatLeftText fontSize="16px" />
                <Text fontSize="16px" pl={2}>
                  15
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
