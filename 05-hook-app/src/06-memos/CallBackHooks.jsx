import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHooks = () => {
    const [counter, setCounter] = useState(1);

    const increment = useCallback(
        () => {
            setCounter( (value) => value+1 );
        },
        [],
    )

    return (
        <>
            <h1>useCallBack Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </>
    ) 
    

}
