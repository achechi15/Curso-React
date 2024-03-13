import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setformState] = useState( {
        username: 'alexis',
        email: 'alexis@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ( { target }) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [ name ]: value,
        })
    }

    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            {
                (username === 'alexis2') && <Message />
            }
                </>
    )
}
