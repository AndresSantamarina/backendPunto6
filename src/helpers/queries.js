const URL_Recetas = import.meta.env.VITE_API_RECETAS;
const URL_Receta = import.meta.env.VITE_API_RECETA;
const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;

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
        const respuesta = await fetch(URL_Receta + '/' + id);
        return respuesta
    } catch (error) {
        console.log(error);
    }
};

export const obtenerDetallesRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Receta + '/' + id);
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
        const respuesta = await fetch(`${URL_Receta}/${id}`, {
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
        const respuesta = await fetch(`${URL_Receta}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

const userAdmin = {
    mail: "usuarioRecetas@gmail.com",
    password: "123Aa$123"
}

export const login = (usuario)=>{
    if (usuario.mail === userAdmin.mail && usuario.password === userAdmin.password){
        sessionStorage.setItem('usuarioRecetas', JSON.stringify(usuario.mail))
        return true
    }else{
        return false
    }
}