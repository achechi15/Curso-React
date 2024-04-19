import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
    
    const [formState, setformState] = useState( initialForm )

    const onInputChange = ( { target }) => {
        // console.log(target)
        const { value, name } = target;
        // console.log( value, name )
        setformState({
            ...formState,
            [ name ]: value,
        })
    }
    
    const onResetForm = () => {
        setformState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
