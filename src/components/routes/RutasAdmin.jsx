import { Routes, Route } from "react-router-dom";
import Administrar from "../pages/Administrar";
import FormularioReceta from "../pages/receta/FormularioReceta";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrar />}></Route>
        <Route
          exact
          path="/crear"
          element={<FormularioReceta editar={false} titulo="Nueva receta" />}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<FormularioReceta editar={true} titulo="Editar receta" />}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
