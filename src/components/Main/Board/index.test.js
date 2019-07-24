import React from 'react';
import Board from './index';
import { mount } from 'enzyme';

describe('Board', () => {
  let test = "test"

  it('Should render Component', () => {
    const wrapper = mount(<Board userName={test} cardData={[{id: 1, word: 'fml'}]}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

})