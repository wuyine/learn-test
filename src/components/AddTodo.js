import React,{ Component } from 'react'
import Todo from './Todo'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    }
    handleAddTodoClick() {
        let node = this.refs.input;
        let value = node.value;
        if(value.trim().length>0) {
            this.props.onAddClick(value)
        }
        node.value = "";
    }
    render() {
        return (
           <div>
                <input type="text" ref="input" />
                <button onClick={this.handleAddTodoClick} >Add</button>
           </div>
        )
    }
}

export default AddTodo;