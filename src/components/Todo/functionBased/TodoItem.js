import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    

    const [ completed, setCompleted ] = useState(false);

    useEffect(
        () => {
            setCompleted(props.todo.completed)
        }, [props]);

    return (
        <li key={ props.todo.id }
                className="todo-list-item">
            <input type="checkbox" 
                    className="checkbox"
                    checked={ completed }
                    onChange={ () => props.handleTodoTask(props.todo.id) }/>
            <span className={ completed ? "todo-completed" : ""} 
                style={{ padding: "8px", display: "inline-block" }}>{ "Title : " + props.todo.title}</span>
            <button className="style-button-1 float-right"
                onClick={ () => props.deleteTodo(props.todo.id) }>Delete</button>
            <button className="style-button-1 float-right"
                onClick={ () => props.editTodo(props.todo) }>Edit</button>
        </li>
    );
}

export default TodoItem;