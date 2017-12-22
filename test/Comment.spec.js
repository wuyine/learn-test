import React from 'react';

// Once we set up Karma to run our tests through webpack
// we will no longer need to have these long relative paths
import CommentList from '../src/components/CommentList';
import { spy } from 'sinon';
import Enzyme,{
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() })

// describe('(Component) CommentList', () => {

  // using special describeWithDOM helper that enzyme
  // provides so if other devs on my team don't have JSDom set up
  // properly or are using old version of node it won't bork their test suite
  //
  // All of our tests that depend on mounting should go inside one of these
  // special describe blocks
  /**
   * const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
   * 
   * 
   */
  describe('Lifecycle methods', () => {
    it('calls componentDidMount', () => {
        spy(CommentList.prototype,'componentDidMount');
        function onMount() {

        }
        const props = {
            onMount: onMount,  // an anonymous function in ES6 arrow syntax
            isActive: false
        }

        // using destructuring to pass props down
        // easily and then mounting the component
        const wrapper = mount(<CommentList />);

        //   expect(wrapper.props().bar).to.equal('baz');
        // CommentList's componentDidMount should have been
        // called once.  spyLifecyle attaches sinon spys so we can
        // make this assertion
        wrapper.setProps(props);
        expect(wrapper.props().isActive).to.equal(false);
        expect(wrapper.props().onMount).to.be.an('function');
        
        expect(
            CommentList.prototype.componentDidMount.calledOnce
        ).to.equal(true);
    });

    // it('calls onMount prop once it mounts', () => {
    //   // create a spy for the onMount function
    //   const props = { onMount: sinon.spy() };

    //   // mount our component
    //   mount(<CommentList {...props} />);

    //   // expect that onMount was called
    //   expect(props.onMount.calledOnce).to.be.true;
    // });
  });
// });
