import React, { useEffect, useState } from 'react';

const TodoForm = (props) => {
    
    const { isEditing, currentTodo, todoAction } = props;
    const actionText = !isEditing ? "Add" : "Edit";
    const initialState = { id: null, title: "", completed: false };

    const [ todo, setTodo ] = useState(initialState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setTodo({ ...todo, [name] : value });
    }

    useEffect(
        () => {
            setTodo(currentTodo)
        }, [props]
    );

    return (
        <form className="form-todo-container" 
            onSubmit={ 
                    (event) => {
                        event.preventDefault();
                        if(!todo.title) return;

                        todoAction(todo);

                        setTodo(initialState);
                    }
                }>
            <label htmlFor="title"></label>
            <input  type="text" 
                    id="title"
                    name="title" 
                    className="input-todo"
                    value={ todo.title }
                    placeholder="Todo..."
                    onChange={ handleInputChange } />
            <button className="style-button-1"
                    style={{ width: "60%", margin: "auto", textAlign : "center", display : "block"}}>{ actionText } todo</button>
        </form>
    );
}

export default TodoForm;