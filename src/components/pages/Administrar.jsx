import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../helpers/queries";
import { useState, useEffect } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import ItemReceta from "./receta/ItemReceta";



const Administrar = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      setRecetas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-5 my-3">Recetas disponibles</h1>
        <Link to="crear" className="my-3 btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>

      <Table responsive bordered hover className="text-center">
        <thead>
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => 
            <ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas}/>)
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrar;
