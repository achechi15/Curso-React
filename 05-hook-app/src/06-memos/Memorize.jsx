import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {             
    
    const [Status, setStatus] = useState(true);
    const  { increment, counter } = useCounter(0)
    return (
        <>
            <h1>Counter: <Small value={ counter }/></h1>
            <hr />

            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button onClick={ () => setStatus( !Status )} className="btn btn-outline-primary">Show/Hide { JSON.stringify(Status) }</button>
        </>
    )             
}
