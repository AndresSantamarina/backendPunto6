import { Col, Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";


const Inicio = () => {
  return (
    <section className="mainSection">
      <article className="banner mb-4">
        <img src="" alt="imagen de la cafetería" className="img-fluid " />
      </article>
      <Container>
        <h1 className="mb-4 display-4">Nuestros Productos</h1>
        <Row>
          <CardReceta />
          <CardReceta />
          <CardReceta />
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;