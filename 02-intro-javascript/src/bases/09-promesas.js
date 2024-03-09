import { getHeroById } from "./bases/08-import-export";
console.log("Hola mundo!!");

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // resolve();
//         // Tarea
//         // importen el
//         // const heroe = getHeroById(2);
//         resolve(getHeroById(2));
//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log(heroe);
// });

const getHeroesByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve();
            // Tarea
            // importen el
            const heroe = getHeroById(id);
            if (heroe) resolve( heroe );
            reject('No se ha encontrado el valor');
        }, 2000)
    });
    return promesa;
}

getHeroesByIdAsync(2)
.then( console.log )
.catch(console.warn)