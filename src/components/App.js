import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,toggleTodo,setVisibilityFilter,visibleFilters } from '../action'
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
        let { dispatch,visibleTodos,onAddClick,onTodoClick,onFilterChange } = this.props;
        return (
            <div style={{width:'400px',margin:'100px auto'}} >
                <AddTodo onAddClick={onAddClick} ></AddTodo>
                <TodoList todos={visibleTodos} onTodoClick={onTodoClick} ></TodoList>
                <Footer  onFilterChange={onFilterChange} ></Footer>
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
function mapStateToProps(state) {
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAddClick:text => dispatch(addTodo(text)),
        onTodoClick:id => dispatch(toggleTodo(id)),
        onFilterChange:filter => dispatch(setVisibilityFilter(filter))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
