// import { useState } from "react"
import { useForm } from "../hooks/useForm"
// import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ formState.username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="@gmail.com"
                name="email"
                value={ formState.email }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={ formState.password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
            {/* { (username === 'alexis2') && <Message />} */}
                </>
    )
}
