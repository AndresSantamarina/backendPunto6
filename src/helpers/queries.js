const URL_Recetas = import.meta.env.VITE_API_RECETA;

console.log(URL_Recetas);

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