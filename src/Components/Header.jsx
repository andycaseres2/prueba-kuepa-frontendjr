import React from 'react'
import { Stack, Input, Text, Box } from '@chakra-ui/react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

export const Header = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <Input width="300px" placeholder="Search" />
        </Box>
        <Box>
          <Text>Calendario</Text>
        </Box>
      </Stack>
    </>
  )
}
