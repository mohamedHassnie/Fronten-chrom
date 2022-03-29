import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Dashbord from "./Dashbord";
import Ajout from "./Ajout";
import InterfaceAdmin from "./InterfaceAdmin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Dashbord" element={<Dashbord />}></Route>
        <Route path="/Ajout" element={<Ajout />}></Route>
        <Route path="/interfaceAdmin" element={<InterfaceAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
