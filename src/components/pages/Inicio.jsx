import { Col, Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import banner from "../../assets/banner.avif";
import { leerRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Inicio = () => {
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
    <section className="mainSection">
      <article className="banner mb-4">
        <img src={banner} alt="imagen de la cafetería" className="img-fluid " />
      </article>
      <Container>
        <h1 className="mb-4 display-4">Nuestras Recetas</h1>
        <Row>
          {recetas.map((receta) => 
            <CardReceta key={receta.id} receta={receta}/>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
