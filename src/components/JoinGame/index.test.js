import React from 'react';
import JoinGame from '.';
import { shallow } from 'enzyme';

describe('JoinGame', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<JoinGame />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})