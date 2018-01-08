import { expect } from 'chai';
import Demo from '../src/index'
import Enzyme,{ mount } from 'enzyme';
import sinon from 'sinon';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('hello',()=>{
    it('words!',()=>{
        expect(true).to.be.true;
    })
    it('calls componentDidMount', () => {
        sinon.spy(Demo.prototype, 'componentDidMount');
        const wrapper = mount(<Demo />);
        expect(Demo.prototype.componentDidMount.calledOnce).to.equal(true);
      });
})