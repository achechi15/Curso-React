console.log("Hola mundo!!");

const persona = {
    nombre: 'Alexis',
    apellido: 'Montalvo',
    edad: 18,
}

const { nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad);


const usarContext = ( { nombre, apellido, edad} ) => {
    return {
        nombreClave: nombre,
        anios: edad,
        curiosidades: {
            odio: 'programar',
            gusta: 'Irati',
        }
    }
}

const avenger = usarContext(persona);
const { nombreClave, anios, curiosidades: {odio, gusta}} = avenger;
console.log(avenger);

console.log(nombreClave, anios, odio, gusta);