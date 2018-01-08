import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

let store = createStore(reducer,{todos:[{text:'init',complete:false}]});

console.log(store.getState())

ReactDOM.render( 
    <Provider store={store} ><App/></Provider>    ,
    document.getElementById('root'));


if (typeof module !== 'undefined' && module.hot) {
    module.hot.accept()
}