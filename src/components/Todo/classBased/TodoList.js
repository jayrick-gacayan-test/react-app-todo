import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component{
    
    render(){
        const { todos, handleTodoTask, deleteTodo, editTodo } = this.props;
        return(
            todos.map(
                (todo) => {
                    return (
                        <TodoItem key={ todo.id }
                            todo={ todo }
                            handleTodoTask={ handleTodoTask }
                            deleteTodo={ deleteTodo }
                            editTodo={ editTodo }/>
                    )        
                }
            )
        );
    }
}

export default TodoList;