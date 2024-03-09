// import heroes, { owner } from '../data/heroes'
import heroes from '../data/heroes'

// console.log("Hola mundo!!");

export const getHeroById = (id) => heroes.find((iterator) => iterator.id === id);


// console.log(getHeroById(2));

export const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));

// console.log(owner);
