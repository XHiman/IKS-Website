import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Team from "./Pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Exact path="/" element={<Home />} />
        <Route Exact path="/admin" element={<Admin />} />
        <Route Exact path="/team" element={<Team />} />
        <Route Exact path="/admin/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
