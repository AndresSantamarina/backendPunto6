import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleReceta from "./components/pages/receta/DetalleReceta";
import Error404 from "./components/pages/Error404";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Login from "./components/pages/receta/Login"

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioRecetas")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route
          exact
          path="/administrador"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        ></Route>
        <Route exact path="/detalle/:id" element={<DetalleReceta />}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
