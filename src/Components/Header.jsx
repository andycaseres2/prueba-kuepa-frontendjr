import { Stack, Input, Box, Button } from '@chakra-ui/react'
import { FaFilter } from 'react-icons/fa'
import './home.css'

export const Header = () => {
  return (
    <>
      <Stack
        pt="40px"
        pb="40px"
        pl="30px"
        pr="180px"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        {/* input Search */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Input width="300px" placeholder="Search..." borderColor="grey" />
          <Box paddingLeft={4}>
            <Button>
              <FaFilter fontSize="20px" />
            </Button>
          </Box>
        </Box>
        {/* Calendar */}
        <Box>
          <input className="input" type="date" />
        </Box>
      </Stack>
    </>
  )
}
