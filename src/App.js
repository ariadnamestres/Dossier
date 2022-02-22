import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Gale from "./pages/Gale";
import Gale2 from "./pages/Gale2";
import Acordi from "./pages/Acordi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="comptador" element={<Comptador />} />
            <Route path="gale" element={<Gale />} />
            <Route path="gale2" element={<Gale2 />} />
            <Route path="Acordi" element={<Acordi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
