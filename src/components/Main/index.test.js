import React from 'react';
import Main from '.';
import { shallow } from 'enzyme';

describe('Main', () => {
  let wrapper;
  let instance;
  let mockData={type:null}
  let mockPlayers= [{type:null, players:{blueIntel:{name: "test"}}}, {type: null,players:{blueIntel:{name: "test"}}}]
  let mockScores={blueScore: 0, redScore: 0}

  beforeEach(() => {
    wrapper = shallow(<Main scores={mockScores} players={mockPlayers} cardData={mockData} />);
    instance = wrapper.instance();

  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})