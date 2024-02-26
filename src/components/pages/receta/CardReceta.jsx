import { Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src={receta.imagen}
            alt={receta.nombreReceta}
            className="card-img-top-nueva img-fluid"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font text-center">{receta.nombreReceta}</Card.Title>
          <Card.Text>
            <span className="fw-bold">Ingredientes: </span>
            {receta.ingredientes}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link to={"detalle/" + receta.id} className="btn btn-grad text-light me-2">
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;
