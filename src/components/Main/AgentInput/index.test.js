import React from 'react';
import AgentInput from './index';
import { shallow } from 'enzyme';

describe('AgentInput', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<AgentInput />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})