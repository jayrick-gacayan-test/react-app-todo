import React, { Component }from 'React';

import TodoList from './TodoList';
class TodoContainer extends Component{
    
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
        ]
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
                ]
            }
        );
    }

    render(){
        return (
            <div className="container margin-big-top">
                <h1 className="text-center">This is the Todo page.</h1>
                <div>
                    <p className="lead font-weight-bold font-size-3 text-center">{ !editing ? "Add" : "Edit" } todo</p>
                    
                </div>
                <ul>
                    <TodoList todos={ this.state.todos } 
                        deleteTodo={ this.deleteTodo }
                        editTodo={ this.editTodo }
                        handleTodoTask={ this.handleTodoTask } />
                </ul>
            </div>
        );
    }
}

export default TodoContainer;