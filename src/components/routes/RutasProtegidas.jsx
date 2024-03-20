import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const administrador =
    JSON.parse(sessionStorage.getItem("usuarioRecetas")) || null;
  if (!administrador) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
