console.log("Hola mundo!!");

const name = 'Alexis';
const surname = 'Montalvo';

const fullName = `${name} ${surname}`;

console.log(fullName);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Esto es un texto: ${getSaludo('Lin')} `);