import App from '../src/index'
import Enzyme,{ mount } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
sinon.spy(App.prototype, 'componentDidMount');
describe('hello',()=>{
    it('words!',()=>{
        expect(true).to.be.true;
    })
    it('calls componentDidMount', () => {
        
        const wrapper = mount(<App />);
        expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
      });
})