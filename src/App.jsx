import React, { useState, useEffect } from 'react'
import { Home } from './Components/Home'
import { NavbarLeft } from './Components/NavbarLeft'
import { Navbarright } from './Components/Navbarright'
import './app.css'
import { Stack } from '@chakra-ui/react'
import * as API from './services/setting'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    API.getAllPlayers().then((data) => {
      setPlayers(data)
    })
  }, [])

  return (
    <div className="App">
      <Stack flexDirection="row">
        <NavbarLeft />
        <Home {...players} />
        <Navbarright />
      </Stack>
    </div>
  )
}

export default App
