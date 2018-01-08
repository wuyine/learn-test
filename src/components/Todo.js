import React,{ Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { todo,onTodoClick } = this.props;
        let { text,complete } = todo;
        let style = complete ? {textDecoration:'line-through'}:{}
        return (
            <li onClick={onTodoClick} style={style}>{text}</li>
        )
    }
}

export default Todo