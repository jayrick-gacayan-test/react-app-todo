import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    console.log(props.todos);
    return (
        props.todos.map(
            (todo) => {
                return (
                    <TodoItem key={ todo.id }
                            todo={ todo }
                            handleTodoTask={ props.handleTodoTask }
                            deleteTodo={ props.deleteTodo }
                            editTodo={ props.editTodo } />
                )
            }
        )
    );
}

export default TodoList;