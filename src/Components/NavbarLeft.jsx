import React from 'react'
import { Stack, Text, Box, Image, Tag } from '@chakra-ui/react'
import { AiOutlineHome, AiOutlineInsertRowAbove } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import { RiChat2Line } from 'react-icons/ri'

export const NavbarLeft = () => {
  return (
    <>
      <Stack
        width="20rem"
        height="100%"
        backgroundColor="#1A365D"
        zIndex={1}
        pt={10}
        pb={10}
        position="absolute"
        paddingLeft={6}
        justifyContent="space-between"
      >
        <Box>
          <Box pb={20} width="300px" display="flex">
            <Text fontWeight="bold" color="grey" fontSize="30px">
              Ket
            </Text>
          </Box>
          <Text pb="10px">
            <AiOutlineHome size="30px" color="grey" />
          </Text>
          <Text pb="10px">
            <CgNotes size="30px" color="red" />
          </Text>
          <Text pb="10px">
            <AiOutlineInsertRowAbove size="30px" color="grey" />
          </Text>
        </Box>
        <Box>
          <Text pb={10} pl={2.5}>
            <RiChat2Line size="30px" color="grey" />
          </Text>
          <Image
            borderRadius="50px"
            boxSize="50px"
            objectFit="cover"
            src="https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg?ver=6"
            alt="Andy Caseres"
          />
        </Box>
      </Stack>
    </>
  )
}
