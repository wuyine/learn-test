import { createAction,handleAction } from 'redux-actions'

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBLE_FILTER = 'SET_VISIBLE_FILTER';



let id = 0;
export const addTodo = createAction(ADD_TODO,text => ({
    text,
    id:id++,
    complete:false
}));
export const toggleTodo = createAction(COMPLETE_TODO);

export const setVisibilityFilter = createAction(SET_VISIBLE_FILTER);

export const testEpic = createAction('testEpic');



export const visibleFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETE:'SHOW_COMPLETE',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}
