import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import '../../../custom.style/todo.style.css';

class TodoContainer extends Component{
    
    initialState = {
        id: null,
        title: "",
        completed: false
    }

    state = {
        todos: [],
        isEditing: false,
        currentTodo: this.initialState
    };

    
    handleTodoTask = (id) => {
        this.setState(
            (prevState) => ({
                todos: prevState.todos.map(
                    (todo) => {
                        return todo.id === id ? 
                            { ...todo, completed : !todo.completed } :
                            todo;
                    }
                )
            })
        );
    }

    deleteTodo = (id) => {
        this.setState(
            {
                todos: [
                    ...this.state.todos.filter(
                        (todo) => {
                            return todo.id !== id;
                        }
                    )
                ],
                isEditing: false
            }
        );
    }

    addTodo = (todo) => {
        todo.id = this.state.todos.length === 0 ? 1 : 
                this.state.todos[this.state.todos.length - 1].id + 1;
        this.setState({
            todos: [...this.state.todos, todo],
            isEditing: false
        });
    }

    editTodo = (todo) => {
        this.setState(
            (prevState) => ({
                currentTodo : todo,
                isEditing: !prevState.isEditing
            })
        );
    }

    updateTodo = (todoData) => {
        this.setState({
            todos : this.state.todos.map(
                (todo) => {
                    if(todo.id === todoData.id) todo.title = todoData.title;
                    return todo;
                }
            ),
            isEditing: false,
            currentTodo: this.initialState 
        });
    } 

    render(){
        const { isEditing, currentTodo, todos } = this.state; //destructuring properties of state.

        return (
            <div className="container margin-big-top">
                <h1 className="text-center">This is the Todo page.</h1>
                <div>
                    <p className="lead font-weight-bold font-size-3 text-center">{ !isEditing ? "Add" : "Edit" } todo</p>
                    {   
                        <TodoForm isEditing={ isEditing } 
                            todoAction={ !isEditing ? this.addTodo : this.updateTodo }
                            currentTodo={ currentTodo } /> 
                    }
                </div>
                <ul>
                    {
                        todos.length > 0 ?
                        <TodoList todos={ todos } 
                        deleteTodo={ this.deleteTodo }
                        editTodo={ this.editTodo }
                        handleTodoTask={ this.handleTodoTask } 
                        /> : <li>No todo task yet.</li>
                    }
                </ul>
            </div>
        );
    }
}

export default TodoContainer;