import React,{ Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { todos=[],onTodoClick } = this.props;
        return (
            <ul>{todos.map((todo)=><Todo key={todo.id} todo={todo} onTodoClick={()=>onTodoClick(todo.id)} ></Todo>)}</ul>
        )
    }
}

export default TodoList;