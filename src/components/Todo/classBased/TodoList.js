import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component{
    
    render(){
        return(
            this.props.todos.map(
                (todo) => {
                    return (
                        <TodoItem key={ todo.id }
                            todo={ todo }
                            handleTodoTask={ this.props.handleTodoTask }
                            deleteTodo={ this.props.deleteTodo }
                            editTodo={ this.props.editTodo }/>
                    )        
                }
            )
        );
    }
}

export default TodoList;