import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Root from '../src/Root';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
describe('(container) Root',()=>{
    it('renders as a <div></div>',()=>{
        const wrapper = shallow(<Root/>);
        expect(wrapper.type()).to.eql('div');
    });
    it('has style with height 100%', () => {
        const wrapper = shallow(<Root />);
        const expectedStyles = {
          height: '100%',
          background: '#333'
        }
        expect(wrapper.prop('style')).to.eql(expectedStyles);
      });
    
      it('contains a header explaining the app', () => {
        const wrapper = shallow(<Root />);
        expect(wrapper.find('.welcome-header')).to.have.length(1);
      });
})