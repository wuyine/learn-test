import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
    render() {
        return <div>dem1112312312231331312o</div>
    }
}


ReactDOM.render( <Demo/>,document.body.appendChild(document.createElement('div')));


if (typeof module !== 'undefined' && module.hot) {
    module.hot.accept()
}