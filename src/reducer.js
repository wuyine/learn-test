import { combineReducers } from 'redux';
import { handleActions,handleAction } from 'redux-actions';

import { 
    addTodo,
    toggleTodo,
    setVisibilityFilter
 } from './action'


export const todos = handleActions({
    [addTodo](state,action) {
      return [...state,action.payload]
    },
    [toggleTodo](state,action) {
      return [...state.map(item=>{
        if(item.id === action.payload) {
            return Object.assign({},item,{
                complete:!item.complete
            })
        }
        return item;
    })]
      
    }
  }, []);

export const visibilityFilter = handleAction(setVisibilityFilter,(state,action)=> action.payload,'' )

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;