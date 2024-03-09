import PropTypes from 'prop-types';
import { useState } from 'react';

export function CounterApp( { value } ) {
    // Tambien se podría poner:
    // export const CounterApp = () => {}

    const [counter, setCounter] = useState( value );
    

    
    const handleAdd = () => {
        // console.log(event);
        setCounter((c) => (c+1));
    }
    const handleSubstract = () => {
        setCounter((c) => (c-1));
    }
    const handleReset = () => {
        setCounter(value);
    }

    return <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>
            +1
        </button>
        <button onClick= { handleSubstract } >-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
} 

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}