import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
// import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "./useTodo"


// const init = () => {
//     return JSON.parse( localStorage.getItem('todos')) || [];
// }

export const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();
    
    return (
        <>
            <h1>TodoApp { todosCount }, <small>pendientes: { todosPendingCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList acepta como prop el todo*/}
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/*  */} 
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* FIN TodoAdd */}
                </div>
            </div>
            
        </>
    )
}
