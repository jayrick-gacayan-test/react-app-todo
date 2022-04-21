import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../../../custom.style/todo.style.css';

const TodoContainer = () => {

    // initialization of a todo object
    const initialState = {
        id : null,
        title : "",
        completed : false
    };

    const todosData = [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        },
        {
            id: 2,
            title: "Todo 2",
            completed: false
        },
        {
            id: 3,
            title: "Todo 3",
            completed: false
        }
    ]

    const [ editing, setEditing ] = useState(false); // checks if editing is enable
    const [ currentTodo, setCurrentTodo ] = useState(initialState); // getting the current todo
    const [ todos, setTodos ] = useState(todosData); // getting the list of todo data

    /* add method for todo */
    const addTodo = (todo) => {
        todo.id = todos[todos.length - 1].id + 1;
        setTodos([ ...todos, todo]); // combined two array values
    }

    /* updating complete status of todo */
    const handleTodoTask = (id) => {
        setTodos(
            todos.map(
                (todo) => {
                    return todo.id === id ? 
                        { ...todo, completed : !todo.completed } : //updating object
                        todo;
                }
            )
        );
    }

    /* deleting method of todo */
    const deleteTodo = (id) => {
        setTodos(todos.filter(
            (todo) => {
                return todo.id !== id;
            }
        )); // deleting chosen object;

        setEditing(false);
    }

    /* retrieving the selected todo to edit */
    const editTodo = (todo) =>
    {
        setEditing(true);
        setCurrentTodo(todo);
    }

    /* updating the selected edited todo */
    const updateTodo = (todoData) => {
        setEditing(false);

        setTodos(todos.map(
            (todo) => { 
                return todo.id === todoData.id ? todoData : todo; 
            }
        ));

        setCurrentTodo(initialState);
    }

    return (
        <div className="container margin-big-top">
            <h1 className="text-center">This is the Todo page.</h1>
            <div>
                <p className="lead font-weight-bold font-size-3 text-center">{ !editing ? "Add" : "Edit" } todo</p>
                <TodoForm 
                    isEditing={ editing } 
                    todoAction={ !editing ? addTodo : updateTodo }
                    currentTodo={ currentTodo }
                />
            </div>
            <ul>
                <TodoList todos={ todos } 
                    deleteTodo={ deleteTodo }
                    editTodo={ editTodo }
                    handleTodoTask={ handleTodoTask } />
            </ul>
        </div>
    );
}

export default TodoContainer;