import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
    render() {
        return <div>我是一个帅哥</div>
    }
}

export default Demo;

ReactDOM.render( <Demo/>,document.body.appendChild(document.createElement('div')));


if (typeof module !== 'undefined' && module.hot) {
    module.hot.accept()
}