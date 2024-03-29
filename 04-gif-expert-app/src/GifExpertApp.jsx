import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if (categories.includes( newCategory )) {
            window.alert('Ya ha introducido una vez ese documento');
            return;
        }
        setCategories([ newCategory, ...categories]);
    }

    return <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value)}
        />
        { categories.map( ( category ) => (
            <GifGrid key={ category } category={ category } />
            )) 
        }
    </>
}
