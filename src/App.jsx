import { Home } from "./Components/Home";
import { NavbarLeft } from "./Components/NavbarLeft";
import { Navbarright } from "./Components/Navbarright";
import "./app.css";

function App() {
  return (
    <div className="App">
      <NavbarLeft />
      <Home />
      <Navbarright />
    </div>
  );
}

export default App;