import React,{ Component } from 'react'
import Todo from './Todo'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    }
    handleAddTodoClick(e) {
        if(e.keyCode !== 13) {
            return 
        }
        let node = e.target;
        let value = node.value;
        if(value.trim().length>0) {
            this.props.onAddClick(value)
        }
        node.value = "";
    }
    render() {
        return (
             <input style={{width:'100%'}} type="text" ref="input" placeholder="enter" onKeyDown={this.handleAddTodoClick} />
        )
    }
}

export default AddTodo;