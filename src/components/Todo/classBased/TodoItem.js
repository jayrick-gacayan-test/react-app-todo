import React, { Component } from 'react';
class TodoItem extends Component{
    
    render(){
        const { todo, handleTodoTask, deleteTodo, editTodo } = this.props; // destructuring props
        const { id, completed, title }  = todo; // destructuring todo

        return(
            <li key={ this.props.todo.id }
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
}

export default TodoItem;