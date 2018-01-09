import * as actions from '../src/action'

describe('actions',()=>{
    it('addTodo should create addTodo action',()=>{
        expect(actions.addTodo('test')).to.deep.equal({type:actions.ADD_TODO,text:'test'})
    });
    it('completeTodo should create completeTodo action',()=>{
        expect(actions.completeTodo(1)).to.deep.equal({type:actions.COMPLETE_TODO,index:1})
    });
    it('setVisibilityFilter should create setVisibilityFilter action',()=>{
        expect(actions.setVisibilityFilter(actions.visibleFilters.SHOW_ACTIVE)).to.deep.equal({type:actions.SET_VISIBLE_FILTER,filter:actions.visibleFilters.SHOW_ACTIVE})
    })
})