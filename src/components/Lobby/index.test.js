import React from 'react';
import Lobby from '.';
import { shallow } from 'enzyme';

describe('Lobby', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Lobby />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})