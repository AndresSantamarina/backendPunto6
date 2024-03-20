import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerDetallesRecetaAPI } from "../../../helpers/queries";
import { useEffect, useState } from "react";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState();

  const cargarDatosReceta = async () => {
    try {
      const detallesReceta = await obtenerDetallesRecetaAPI(id);

      setReceta(detallesReceta);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatosReceta();
  }, []);

  return (
    <Container className="d-flex justify-content-center mainSection">
      <Card className="d-flex w-75 my-5 justify-content-center">
        <Row>
          <Col>
            {receta && receta.imagen && (
              <Card.Img
                src={receta.imagen}
                alt={receta.nombreReceta}
                className="img-fluid align-self-start"
              />
            )}
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column justify-content-start">
              <Card.Title className="fw-bold">
                {receta ? receta.nombreReceta : "Cargando..."}
              </Card.Title>
              <Card.Text className="instruccionesReceta">
                {receta ? receta.instrucciones : "Cargando..."}
                <br />
                <span className="fw-bold"> Categoría: </span>
                {receta ? receta.categoria : "Cargando..."} <br />
                <span className="fw-bold">Ingredientes: </span>{" "}
                {receta ? receta.ingredientes : "Cargando..."}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
