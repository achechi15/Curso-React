/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroesById debe de retornar un heroe por id', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })
    test('getHeroesById debe de retornar undefined si el id no existe', () => { 
        const id = 10;
        const hero = getHeroeById(id);
        expect( hero ).toEqual( undefined );
    })

    // Tarea
    // Debe de retornar un arreglo con lo heroes de DC
    // Length == 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los heroes de Marvel
    // length == 2
    test('getHeroesByOwner debe de retornar el arreglo con los heroes de DC', () => {
        const realArreglo = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]
        const arreglo = getHeroesByOwner('DC');

        expect(arreglo.length).toBe(3);
        expect(arreglo).toEqual(realArreglo);
    });

    test('getHeroesByOwner debe de volver el arreglo con los heroes de Marvel', () => {
        const realArreglo = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ]
        const arreglo = getHeroesByOwner('Marvel');

        expect(arreglo.length).toBe(2);
        expect(arreglo).toEqual(realArreglo);
    });

});