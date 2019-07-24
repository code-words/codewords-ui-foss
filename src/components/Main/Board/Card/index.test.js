import Card from './index';
import React from 'react';
import { shallow } from 'enzyme'
 require('../../../../images/bystander.jpg');


describe('Card', () => {
    let mockCard = {type: "assassin", id: 22}
    let mockFn = jest.fn()
    let wrapper = shallow(<Card card = {mockCard} sendGuess={mockFn}/>)
    it('should matchsnapshot', () => {
        wrapper.setState({ flipped: false});
        expect(wrapper).toMatchSnapshot()
    });
    it('should matchsnapshot', () => {
        let wrapper = shallow(<Card card={mockCard} isActive={false}/>)
        wrapper.setState({ flipped: true });
        expect(wrapper).toMatchSnapshot()
    });
    it('handleClick should be called on click', () => {
        let mockFn = jest.fn()
        let wrapper = shallow(<Card sendGuess={mockFn} card={mockCard} isActive={false}/>)
        const spy = jest.spyOn(wrapper.instance(), 'handleClick')
        let mockEvent = { target: { value: "", name: "title" } }
        wrapper.find('article').simulate('click', mockEvent);
        expect(spy).toHaveBeenCalled()
        expect(mockFn).toHaveBeenCalled()
    });
    it('should send an id when is Active is true and card.type is false', () => {
        let mockCard = {type: false}
         wrapper = shallow(<Card card={mockCard} sendGuess={mockFn} isActive={true}/>)
        expect(mockFn).toHaveBeenCalled()
    });

});