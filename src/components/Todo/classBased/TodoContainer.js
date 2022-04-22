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
        todos: [
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
        ],
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
        todo.id = this.state.todos[this.state.todos.length - 1].id + 1;
        this.setState({
            todos: [...this.state.todos, todo],
            isEditing: false
        });
    }

    editTodo = (todo) => {
        this.setState({
            currentTodo : todo,
            isEditing : true
        });
        
    }

    updateTodo = (todoData) => {
        console.log(todoData.id);
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
        console.log(this.state.currentTodo);
        return (
            <div className="container margin-big-top">
                <h1 className="text-center">This is the Todo page.</h1>
                <div>
                    <p className="lead font-weight-bold font-size-3 text-center">{ !this.state.isEditing ? "Add" : "Edit" } todo</p>
                    {   
                        <TodoForm isEditing={ this.state.isEditing } 
                            todoAction={ !this.state.isEditing ? this.addTodo : this.updateTodo }
                            currentTodo={ this.state.currentTodo } /> 
                    }
                </div>
                <ul>
                    <TodoList todos={ this.state.todos } 
                        deleteTodo={ this.deleteTodo }
                        editTodo={ this.editTodo }
                        handleTodoTask={ this.handleTodoTask } 
                        />
                </ul>
            </div>
        );
    }
}

export default TodoContainer;