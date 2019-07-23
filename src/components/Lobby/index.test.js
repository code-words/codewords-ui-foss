import React from 'react';
import Lobby from '.';
import { MemoryRouter } from 'react-router';
import App from '../App';
import { mount } from 'enzyme';

describe('Lobby', () => {
  let wrapper;
  let instance;
  let mockPlayers;

  beforeEach(() => {
    mockPlayers = [
      { name: 'test1', id: 1 },
      { name: 'test2', id: 2 }
    ];
    wrapper = mount(
      <MemoryRouter initialEntries={['/lobby']}>
        <App>
          <Lobby players={mockPlayers} />
        </App>
      </MemoryRouter>
    );
    instance = wrapper.instance();
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot after a player joins', () => {
    expect(wrapper).toMatchSnapshot();
    expect(mockPlayers.length).toEqual(2);

    mockPlayers.push({name: 'test3', id: 3 });

    expect(wrapper).toMatchSnapshot();
    expect(mockPlayers.length).toEqual(3);
  })

})