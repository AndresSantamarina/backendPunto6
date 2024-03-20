import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearRecetaAPI,
  editarRecetaAPI,
  obtenerRecetaAPI,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const FormularioReceta = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate();

  const cargarDatosReceta = async () => {
    try {
      const respuesta = await obtenerRecetaAPI(id);
      if (respuesta.status === 200) {
        const recetaEncontrada = await respuesta.json();
        setValue("nombreReceta", recetaEncontrada.nombreReceta);
        setValue("imagen", recetaEncontrada.imagen);
        setValue("categoria", recetaEncontrada.categoria);
        setValue("instrucciones", recetaEncontrada.instrucciones);
        setValue("ingredientes", recetaEncontrada.ingredientes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editar === true) {
      cargarDatosReceta();
    }
  }, []);

  const recetaValidada = async (receta) => {
    if (editar === true) {
      const respuesta = await editarRecetaAPI(receta, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta modificada",
          text: `La receta ${receta.nombreReceta} fue modificada correctamente`,
          icon: "success",
        });
        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La receta ${receta.nombreReceta} no pudo ser modificada, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearRecetaAPI(receta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta ${receta.nombreReceta} fue creada correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La receta ${receta.nombreReceta} no pudo ser creada, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(recetaValidada)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta debe tener como mínimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message:
                  "El nombre de la receta debe tener como máximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Seleccione una opción válida",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Agridulce">Agridulce</option>
            <option value="Bebida">Bebida</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Medio kilo de queso cremoso, tomates, etc."
            as="textarea"
            {...register("ingredientes", {
              required: "Los ingredientes de la receta son obligatorios",
              minLength: {
                value: 20,
                message:
                  "Los ingredientes deben tener como mínimo 20 caracteres",
              },
              maxLength: {
                value: 400,
                message:
                  "Los ingredientes deben tener como máximo 400 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formInstrucciones">
          <Form.Label>Instrucciones*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Precalienta el horno a 180°C (350°F). Pelar y cortar las manzanas en rodajas finas. Reserva. En un molde para tarta previamente engrasado, extiende la lámina de masa quebrada y ajústala al molde. Puedes pinchar el fondo con un tenedor para evitar que suba durante el horneado. Distribuye las rodajas de manzana sobre la masa quebrada, cubriendo toda la superficie de manera uniforme. En una sartén, derrite la mantequilla..."
            as="textarea"
            {...register("instrucciones", {
              required: "Las instrucciones de las recetas son obligatorias",
              minLength: {
                value: 150,
                message:
                  "Las instrucciones de las recetas deben tener como mínimo 150 caracteres",
              },
              maxLength: {
                value: 1000,
                message:
                  "Las instrucciones de la recetas deben tener como máximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.instrucciones?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" className="btn-grad">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
