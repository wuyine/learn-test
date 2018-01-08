import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,completeTodo,setVisibilityFilter,visibleFilters } from '../action'
import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { dispatch,visibleTodos=[] } = this.props;
        return (
            <div>
                <AddTodo onAddClick={text=>{dispatch(addTodo(text))}} ></AddTodo>
                <TodoList todos={visibleTodos} onTodoClick={index=>dispatch(completeTodo(index))} ></TodoList>
                <Footer  onFilterChange={filter=>dispatch(setVisibilityFilter(filter))} ></Footer>
            </div>
        )
    }
}

function selectTodos(todos=[],filter) {
    switch(filter) {
        case visibleFilters.SHOW_ALL:
            return todos
        case visibleFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.complete)
        case visibleFilters.SHOW_COMPLETE:
            return todos.filter(todo=>todo.complete)
        default:
            return todos
    }
}

//这里state为store中state
function select(state) {
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        // visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)
