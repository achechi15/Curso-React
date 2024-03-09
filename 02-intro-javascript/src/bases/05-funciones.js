console.log("Hola mundo!!");

// const saludar = function(name) {
//     return `Hola soy ${name}`;
// }

// const saludar2 = (name) => {
//     return `Hola soy ${name}`
// }

// const saludar3 = (name) => `Hola me llamo ${name}`;

// const saludar4 = () => `Hola mundo`;

// console.log(saludar4('Goku'));

const getUser = () => ({
        uid: 'ABC123',  
        username: 'achechi15',
    });


console.log(getUser());


// TAREA
// 1. Transformar a una función flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebenlo

const getUsuarioActivo = ( nombre ) =>  ({
        uid: 'ABC123',
        username: nombre,
    })


const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);