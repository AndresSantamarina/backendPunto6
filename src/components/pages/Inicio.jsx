import { Col, Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import banner from "../../assets/banner.avif"


const Inicio = () => {
  return (
    <section className="mainSection">
      <article className="banner mb-4">
        <img src={banner} alt="imagen de la cafetería" className="img-fluid " />
      </article>
      <Container>
        <h1 className="mb-4 display-4">Nuestras Recetas</h1>
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