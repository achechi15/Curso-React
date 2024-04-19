import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer" 

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

const initialState = []

export const useTodo = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        // console.log(id);
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        // console.log( id );
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    const todosCount = todos.length;

    const todosPendingCount = todos.filter( todo => !todo.done).length;

    return {
        todos,
        todosCount,
        todosPendingCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}