import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
    const { counter, increment, decrement } = useCounter(1)
    const {data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />
            { isLoading ? <LoadingMessage />
            : <PokemonCard id={ counter } name={data.name} sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]} />}
            {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}
            {/* <h3>{ data?.name }</h3> */}
            <button className="btn btn-primary mt-2" onClick={ () => decrement() }>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={ () => increment() }>siguiente</button>
        </>
        
    )
}
