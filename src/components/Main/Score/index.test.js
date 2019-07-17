import React from 'react';
import Score from '.';
import { shallow } from 'enzyme';

describe('Score', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Score players={['Justin', 'Lynne']}/>);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})