const URL_Recetas = import.meta.env.VITE_API_RECETA;

export const leerRecetasAPI = async () => {
    try {
        const respuesta = await fetch(URL_Recetas);
        const listaRecetas = await respuesta.json();
        return listaRecetas
    } catch (error) {
        console.log(error);
    }
}

export const obtenerRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Recetas + '/' + id);
        return respuesta
    } catch (error) {
        console.log(error);
    }
};

export const obtenerDetallesRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Recetas + '/' + id);
        const detallesReceta = await respuesta.json(); // Extraer JSON
        return detallesReceta;
    } catch (error) {
        console.log(error);
    }
};

export const crearRecetaPI = async (recetaNueva) => {
    try {
        const respuesta = await fetch(URL_Recetas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaNueva)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

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

export const borrarRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(`${URL_Recetas}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}