import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import D from './components/demo'

class Demo extends Component {
    render() {
        return <D></D>
    }
}

// export default Demo;


ReactDOM.render( <Demo/>,document.getElementById('root'));


if (typeof module !== 'undefined' && module.hot) {
    module.hot.accept()
}