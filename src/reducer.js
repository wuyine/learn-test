import { combineReducers } from 'redux';
import { handleActions,handleAction } from 'redux-actions';

import { 
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    testEpic
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

export const visibilityFilter = handleAction(setVisibilityFilter,(state,action)=> action.payload,'' );

export const testEpicReducer =  handleAction(testEpic,(state,action) => state + 1,0);

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    testEpicReducer
});

export default todoApp;