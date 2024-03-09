console.log("Hola mundo!!");

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letra, num] = retornaArreglo();

console.log(letra, num);

// Tarea
// El primer valor del arr se llamará nombre
// El segundo valor del arr se llamará setNombre

const usarState = (valor) => {
    return [valor, () => { console.log('Hola mundo'); } ];
}

const [nombre, setNombre] = usarState('Alexis');

console.log(nombre);
setNombre();