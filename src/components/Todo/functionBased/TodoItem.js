import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    
    const { todo, handleTodoTask, deleteTodo, editTodo } = props; // destructuring props
    const { id, title } = todo; // destructuring todo
    
    const [ completed, setCompleted ] = useState(false);

    useEffect(
        () => {
            setCompleted(props.todo.completed)
        }, [props]);

    return (
        <li key={ id }
                className="todo-list-item">
            <input type="checkbox" 
                    className="checkbox"
                    checked={ completed }
                    onChange={ () => handleTodoTask(id) }/>
            <span className={ completed ? "todo-completed" : ""} 
                style={{ padding: "8px", display: "inline-block" }}>{ "Title : " + title}</span>
            <button className="style-button-1 float-right"
                onClick={ () => deleteTodo(id) }>Delete</button>
            <button className="style-button-1 float-right"
                onClick={ () => editTodo(todo) }>Edit</button>
        </li>
    );
}

export default TodoItem;