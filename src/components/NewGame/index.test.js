import React from 'react';
import NewGame from '.';
import { shallow } from 'enzyme';

describe('NewGame', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<NewGame />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})