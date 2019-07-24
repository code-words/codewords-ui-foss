import Card from './index';
import React from 'react';

import { shallow } from 'enzyme'


describe('Card', () => {
    let mockCard = {type: 'null'}
    
    let wrapper = shallow(<Card card={mockCard} image={null}/>)
    it('should matchsnapshot', () => {
        wrapper.setState({ flipped: true });
        expect(wrapper).toMatchSnapshot()
    });
    it('should matchsnapshot', () => {
        wrapper.setState({ flipped: false });
        expect(wrapper).toMatchSnapshot()
    });
    it('handleClick should be called on click', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleClick')
        wrapper.find('article').simulate('click');
       
        expect(spy).toHaveBeenCalled()
    });
});