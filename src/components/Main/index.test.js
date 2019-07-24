import React from 'react';
import Main from '.';
import { shallow } from 'enzyme';

describe('Main', () => {
  let wrapper;
  let mockPlayers= ["test", "test"]
  let mockScores={blueScore: 0, redScore: 0}
  let mockCard=[{flipped:true, type: "blue"}]

  beforeEach(() => {
    wrapper = shallow(<Main cardData={mockCard} scores={mockScores} players={mockPlayers}/>);
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})