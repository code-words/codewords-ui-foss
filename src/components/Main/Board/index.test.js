import React from 'react';
import Board from '.';
import { shallow } from 'enzyme';

describe('Board', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Board />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})