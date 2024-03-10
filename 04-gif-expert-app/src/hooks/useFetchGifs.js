import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";


export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect( () => {
        getGifs( category )
            .then( newImages => setImages( newImages ))
            .then( setIsLoading(false))
    }, []);
    

    return {
        images,
        isLoading
    } 
}
