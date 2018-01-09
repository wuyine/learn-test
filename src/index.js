import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
console.log(reducer)
let store = createStore(reducer);

// console.log(store.getState())

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <Provider store={store} ><App/></Provider>
        )
    }
}
export default Main;
// ReactDOM.render( 
//     <Provider store={store} ><App/></Provider>,
//     document.getElementById('root'));


// if (typeof module !== 'undefined' && module.hot) {
//     module.hot.accept()
// }