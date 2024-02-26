import { Button } from "react-bootstrap";
import { borrarRecetaAPI, leerRecetasAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "Estás seguro de eliminar la receta?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Salir",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Agregar la lógica si quiero borrar
        const respuesta = await borrarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada!",
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success",
          });
          //actualizar la tabla de recetas
          const listaRecetas = await leerRecetasAPI();
          setRecetas(listaRecetas);
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `La receta "${receta.nombreReceta}" no fue eliminada, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombreReceta}
          className="img-thumbnail"
        />
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/administrador/editar/" + receta.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
