import React from 'react';
import Board from './index';
import { mount } from 'enzyme';

describe('Board', () => {
  let test = "test"
  beforeEach(() => {
    wrapper = shallow(<Board userName="Lynne" cardData={[{id: 1, word: 'fml'}]}/>);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();

  });

})