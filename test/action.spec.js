import * as actions from '../src/action'
import { expect } from 'chai';
import sinon from 'sinon';
describe('actions',()=>{
    it('addTodo should create addTodo action',()=>{
        expect(actions.addTodo('test')).to.deep.equal({type:actions.ADD_TODO,payload:{text:'test',id:1,complete:false}})
    });
    it('completeTodo should create completeTodo action',()=>{
        expect(actions.toggleTodo(1)).to.deep.equal({type:actions.COMPLETE_TODO,payload:1})
    });
    it('setVisibilityFilter should create setVisibilityFilter action',()=>{
        expect(actions.setVisibilityFilter(actions.visibleFilters.SHOW_ACTIVE)).to.deep.equal({type:actions.SET_VISIBLE_FILTER,payload:actions.visibleFilters.SHOW_ACTIVE})
    })
})