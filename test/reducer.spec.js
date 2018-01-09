import { todos,visibilityFilter } from '../src/reducer'
import { addTodo,
    completeTodo,
    setVisibilityFilter,
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBLE_FILTER,
    visibleFilters
} from '../src/action'
const { SHOW_ALL, SHOW_COMPLETE, SHOW_ACTIVE } = visibleFilters

describe('reducer teset',()=>{
    const initialState = [
        {text:'todo1',complete:false},
        {text:'todo2',complete:false}
    ]

    it('should handle addTodos',()=>{
        expect(todos([],addTodo('todo1'))).to.deep.equal([{text:'todo1',complete:false}])
    });
    it('should handle complete todos',()=>{
        expect(todos(initialState,completeTodo(1))[1].complete).to.be.equal(true)
    });
    it('should handle visibility complete',()=>{
        const showComplete = state=>state.complete;
        const showActive = state => !state.complete;

        expect(visibilityFilter(initialState,
            setVisibilityFilter(initialState.filter(showComplete)))).to.deep.equal([]);

        let newState = todos(initialState,completeTodo(1));
        expect(visibilityFilter(newState,
            setVisibilityFilter(newState.filter(showComplete)))).to.deep.equal([{text:'todo2',complete:true}]);

        expect(visibilityFilter(newState,
            setVisibilityFilter(newState.filter(showActive)))).to.deep.equal([{text:'todo1',complete:false}])
    });
})