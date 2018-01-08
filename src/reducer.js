import { combineReducers } from 'redux';
import { ADD_TODO,COMPLETE_TODO,SET_VISIBLE_FILTER } from './action'
import index from './index';

function visibilityFilter(state=[],action) {
    switch(action.type) {
        case SET_VISIBLE_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state=[],action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    complete:false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{
                    complete:true
                }),
                ...state.slice(action.index+1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;