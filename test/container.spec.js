// import { todos,visibilityFilter } from '../src/reducer'
// import { addTodo,
//     completeTodo,
//     setVisibilityFilter,
//     ADD_TODO,
//     COMPLETE_TODO,
//     SET_VISIBLE_FILTER,
//     visibleFilters
// } from '../src/action'
// const { SHOW_ALL, SHOW_COMPLETE, SHOW_ACTIVE } = visibleFilters
import App from '../src/index'
import Enzyme,{ mount } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import sinon from 'sinon';

describe('test mounted',()=>{
    const wrapper = mount(<App/>);
    it('should add one todo',()=>{
        let input = wrapper.find('AddTodo');
        expect(input.exists()).to.be.equal(true)
        // input.value = 'test-todo1';
        input.simulate('keydown',{keyCode:13,target:{value:'test-todo1'}});
        expect(wrapper.find('li').length).to.be.equal(1)
        input.simulate('keydown',{keyCode:13,target:{value:'test-todo1'}});
        expect(wrapper.find('li').length).to.be.equal(2)
        expect(wrapper.find('li').first().text()).to.be.equal('test-todo1');

        // describe('todo complete',()=>{
        //     expect(wrapper.find("Todo").prop('todo').complete).to.be.equal(false)
        //     wrapper.find('li').simulate('click');
        //     expect(wrapper.find("Todo").prop('todo').complete).to.be.equal(true)
        // })
    })
})