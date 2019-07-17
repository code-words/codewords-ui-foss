import React from 'react';
import Main from '.';
import { shallow } from 'enzyme';

describe('Main', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Main />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})