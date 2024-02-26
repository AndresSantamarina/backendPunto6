import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioReceta from "./components/pages/receta/FormularioReceta";
import DetalleReceta from "./components/pages/receta/DetalleReceta";
import Administrar from "./components/pages/Administrar";
import Error404 from "./components/pages/Error404";

//npx json-server db.json

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route exact path="/administrador" element={<Administrar />}></Route>
        <Route
          exact
          path="/administrador/crear"
          element={<FormularioReceta editar={false} titulo="Nueva receta"/>}
        ></Route>
         <Route
          exact
          path="/administrador/editar/:id"
          element={<FormularioReceta editar={true} titulo="Editar receta"/>}
        ></Route>
         <Route
          exact
          path="/detalle"
          element={<DetalleReceta />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

