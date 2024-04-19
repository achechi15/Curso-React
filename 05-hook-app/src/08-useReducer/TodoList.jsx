import { TodoItem } from "./TodoItem"


export const TodoList = ( { todos, onDeleteTodo, onToggleTodo } ) => {
    return (
        <ul className="list-group">
            {
                todos.map( task => (
                    <TodoItem key={ task.id } todo={ task } onDeleteTodo= { onDeleteTodo } onToggleTodo={ onToggleTodo }/>
                ))
            }
        </ul>
    )
}
