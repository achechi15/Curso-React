import PropTypes from 'prop-types';

const name = 'Alexis';

// const getEdad = () => {
//     return 18;
// }

// const lista = [1,2,3,4,5,6,7,8,9];

// const objeto = {
//     nombre: 'Alexis',
//     apellido: 'Montalvo',
//     Aficiones: 'Irati',
// }


// eslint-disable-next-line react/prop-types
export const FirstApp = ( { title, num, gustos } ) => {
    
    // if (!gustos) {
    //     throw new Error('Los gustos no existes');
    // }

    // console.log(props)

    return (
        <>
            <h1>{ name }</h1>
            <h1>{ title }</h1>
            <p>Soy un subtitulo</p>
            <p>{ num + 2 }</p>
            <hr />
            <p>{gustos}</p>
            {/* <code>{ JSON.stringify( objeto ) }</code> */}
            {/* <p>{ lista }</p> */}
            {/* <br /> */}
            {/* <code>{ getEdad() }</code> */}
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    gustos: PropTypes.string,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    num: 0,
    gustos: 'No hay gustos',
}