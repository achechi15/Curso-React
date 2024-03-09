console.log("Hola mundo!!");

const persona = {
    nombre: 'Alexis',
    apellido: 'Montalvo',
    edad: 18,
    direccion: {
        ciudad: 'Valencia',
        zip: 46019,
    }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Lin';
persona2.apellido = 'Zheng';
console.log(persona2);
