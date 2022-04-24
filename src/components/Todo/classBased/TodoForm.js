import React, { Component } from 'react';
class TodoForm extends Component{
    
    initialState = {
        id: null,
        title: "",
        completed: false
    }

    constructor(props){
        super(props);
        this.state = {
            currentTodo: props.currentTodo,
            isEditing: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    
    }

    static getDerivedStateFromProps(props, state){
        if(props.isEditing && !state.isEditing)
            return {
                currentTodo: props.currentTodo,
                isEditing: props.isEditing
            };

        return null;
    }
    
    handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(this.state.currentTodo);
        this.setState({
                currentTodo : {
                    ...this.state.currentTodo, [name]: value
                } 
            });
    }

    render(){
        return(
            <form className="form-todo-container" 
                onSubmit={ 
                    (event) => {
                        event.preventDefault();
                        if(!this.state.currentTodo.title) return;

                        this.props.todoAction(this.state.currentTodo);

                        this.setState({
                            currentTodo : this.initialState,
                            isEditing: false
                        });
                    }
                }>
            <label htmlFor="title"></label>
            <input  type="text" 
                    id="title"
                    name="title" 
                    className="input-todo"
                    value={ this.state.currentTodo.title }
                    placeholder="Todo..."
                    onChange={ this.handleInputChange } />
            <button className="style-button-1"
                    style={{ width: "60%", margin: "auto", textAlign : "center", display : "block"}}>{ !this.props.isEditing ? "Add" : "Edit"} todo</button>
        </form>
        );
    }
}

export default TodoForm;