import { Card, Col, Container, Row } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Card className="d-flex w-75">
        <Row>
          <Col>
            <Card.Img
              src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid align-self-start"
            />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column justify-content-start">
              <Card.Title className="fw-bold">Café</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  El café americano es una bebida caliente que consiste en un
                  espresso diluido con agua caliente, lo que resulta en una taza
                  de café suave y aromático. Es una opción popular para aquellos
                  que prefieren un café menos intenso que el espresso
                  tradicional. Perfecto para disfrutar en cualquier momento del
                  día.
                </p>

                <p>
                  {" "}
                  <span className="text-success fw-bold"> Categoría: </span>Infusiones <br /> 
                  <span className="text-success fw-bold">Precio: $1000</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
