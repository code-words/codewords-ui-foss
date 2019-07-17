import React from 'react';
import RuleList from '.';
import { shallow } from 'enzyme';

describe('RuleList', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<RuleList />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})