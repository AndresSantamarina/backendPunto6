const URL_Recetas = import.meta.env.VITE_API_RECETA;

console.log(URL_Recetas);

//GET
export const leerRecetasAPI = async () => {
    try {
        const respuesta = await fetch(URL_Recetas);
        const listaRecetas = await respuesta.json();
        console.log(listaRecetas)
        return listaRecetas
    } catch (error) {
        console.log(error);
    }
}

//GET devuelve un producto
export const obtenerRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Recetas + '/' + id);
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error);
    }
};

//POST
export const crearRecetaPI = async (recetaNueva) => {
    try {
        const respuesta = await fetch(URL_Recetas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaNueva)
        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

//PUT
export const editarRecetaAPI = async (recetaModificada, id) => {
    try {
        const respuesta = await fetch(`${URL_Recetas}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaModificada)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

//DELETE

export const borrarRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(`${URL_Recetas}/${id}`, {
            method: "DELETE"
        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}