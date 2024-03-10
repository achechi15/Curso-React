/* eslint-disable react/prop-types */
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) {
            window.alert('Se debe de introducir al menos 2 carácteres');
            return;
        }

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return <>
        <form onSubmit={ onSubmit }>
            <input 
                type='text' 
                placeholder="Buscar GIF"
                value = { inputValue }
                onChange={ onInputChange }
            />
            <button></button>
        </form>
        
    </>
}
