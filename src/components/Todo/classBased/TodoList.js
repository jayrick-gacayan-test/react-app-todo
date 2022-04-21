import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component{
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.todos.map(
                            (todo) => {
                                <TodoItem key={ todo.id }
                                    todo={ todo }
                                    handleTodoTask={ this.props.handleTodoTask }
                                    deleteTodo={ this.props.deleteTodo }
                                    editTodo={ this.props.editTodo } />
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;