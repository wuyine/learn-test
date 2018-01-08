import React,{ Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { todos,onTodoClick } = this.props;
    
        return (
            <ul>{todos.map((todo,index)=><Todo key={index} todo={todo} onTodoClick={()=>onTodoClick(index)} ></Todo>)}</ul>
        )
    }
}

export default TodoList;