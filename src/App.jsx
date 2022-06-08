import { Home } from "./Components/Home";
import { NavbarLeft } from "./Components/NavbarLeft";
import { Navbarright } from "./Components/Navbarright";
import "./app.css";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Stack flexDirection="row">
        <NavbarLeft />
        <Home />
        <Navbarright />
      </Stack>
    </div>
  );
}

export default App;
