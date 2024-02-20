import { Link } from "react-router-dom";
import error from "../../assets/error404.avif"

const Error404 = () => {
    return (
        <section className="text-center ">
            <img src={error} alt="Error 404" className="img-fluid mx-auto d-block"/>
            <Link to="/" className="my-3 btn btn-success">Volver al inicio</Link>
        </section>
    );
};

export default Error404;