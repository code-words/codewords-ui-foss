import React from 'react';
import StartScreen from '.';
import { shallow } from 'enzyme';

describe('StartScreen', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<StartScreen />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})