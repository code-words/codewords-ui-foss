import React from 'react';
import AgentInput from './index';
import { shallow } from 'enzyme';

describe('AgentInput', () => {
  let wrapper;
  let mockFn= {sendHint: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<AgentInput  cable={mockFn}/>);

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should call handleChange on input', () => {
     let spy = jest.spyOn(wrapper.instance(), "handleChange");
     wrapper.find('.chat-input').simulate("change", {target:{name: "test", value: "testing"}});
    expect(spy).toHaveBeenCalled()
  })
  it('should call handleChatInputKeyPress on keypress', () => {
    let spy = jest.spyOn(wrapper.instance(), "handleChatInputKeyPress");
    wrapper.find('.chat-input').simulate("keyPress", {key: "Enter", preventDefault: jest.fn()});
   expect(spy).toHaveBeenCalled()
 })
 it('should update state when handleSendEvent is called', () => {
  wrapper.setState({ hintWord: 'testing' });
  wrapper.instance().handleSendEvent({preventDefault: jest.fn()})
  expect(wrapper.state('hintWord')).toEqual("");
 });
 it('should call handleSendEvent when form is submitted', () => {
  let spy = jest.spyOn(wrapper.instance(), "handleSendEvent");
  wrapper.find('form').simulate("submit", {key: "Enter", preventDefault: jest.fn()});
   expect(spy).toHaveBeenCalled()
 });
 it('should call handleSendEvent when button is clicked', () => {
  let spy = jest.spyOn(wrapper.instance(), "handleSendEvent");
  wrapper.find('.send-btn').simulate("click", {target:{name: "test", value: "testing"}, preventDefault: jest.fn()});
  expect(spy).toHaveBeenCalled()
 });
  
})