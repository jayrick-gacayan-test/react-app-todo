import React, { Component } from 'react';
class TodoItem extends Component{
    
    
    render(){
        return(
            <li key={ this.props.todo.id }
                className="todo-list-item">
            <input type="checkbox" 
                    className="checkbox"
                    checked={ this.props.todo.completed }
                    onChange={ () => this.props.handleTodoTask(this.props.todo.id) }/>
            <span className={ this.props.todo.completed ? "todo-completed" : ""} 
                style={{ padding: "8px", display: "inline-block" }}>{ "Title : " + this.props.todo.title}</span>
            <button className="style-button-1 float-right"
                onClick={ () => this.props.deleteTodo(this.props.todo.id) }>Delete</button>
            <button className="style-button-1 float-right"
                onClick={ () => this.props.editTodo(this.props.todo) }>Edit</button>
        </li>
        );
    }
}

export default TodoItem;