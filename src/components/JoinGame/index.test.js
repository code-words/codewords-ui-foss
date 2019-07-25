import React from 'react';
import JoinGame from '.';
import { shallow } from 'enzyme';

describe('JoinGame', () => {
  let wrapper;
  let mockState;
  let handleUserInitMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<JoinGame handleUserInit={handleUserInitMock} />);
    mockState = {
      inviteCode: '',
      name: '',
      redirect: false
    }
  });

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state:[inviteCode] on user input', () => {
    expect(wrapper.state()).toEqual(mockState);

    const input = 'XE3T';
    const expectedState = { ...mockState };
    expectedState.inviteCode = input;
    const mockEvent = {
      target: {
        name: 'inviteCode',
        value: input
      }
    }
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state:[name] on user input', () => {
    expect(wrapper.state()).toEqual(mockState);

    const input = 'testUser';
    const expectedState = { ...mockState };
    expectedState.name = input;
    const mockEvent = {
      target: {
        name: 'name',
        value: input
      }
    }
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state to redirect on submit', () => {
    // Expect Default
    expect(wrapper.state()).toEqual(mockState);

    // Setup for input:[inviteCode]
    let expectedState = { ...mockState };
    expectedState.inviteCode = 'XE3T';
    let mockEvent = {
      target: {
        name: 'inviteCode',
        value: 'XE3T'
      }
    }
    // Execution for input:[inviteCode]
    wrapper.instance().handleChange(mockEvent);
    // Evaluate for input:[inviteCode]
    expect(wrapper.state()).toEqual(expectedState);

    // Setup for input:[name]
    expectedState.name = 'testUser';
    mockEvent = {
      target: {
        name: 'name',
        value: 'testUser'
      }
    }
    // Execution for input:[name]
    wrapper.instance().handleChange(mockEvent);
    // Evaluate for input:[name]
    expect(wrapper.state()).toEqual(expectedState);

    // Setup for submit
    expectedState.redirect = true;
    mockEvent = {
      preventDefault: () => { }
    }
    // Execution for submit
    wrapper.instance().handleSubmit(mockEvent)
    // Evaluate for submit
    expect(wrapper.state()).toEqual(expectedState);
  });
//  =======================================
// Todo: =================================
//  =======================================
  it('should call handleUserInit w/ response from Post', async () => {
    let mockEvent = {
      target: {
        name: 'name',
        value: 'testUser'
      }
    }
    wrapper.instance().handleChange(mockEvent);

    mockEvent = {
      target: {
        name: 'inviteCode',
        value: 'XE3T'
      }
    }
    wrapper.instance().handleChange(mockEvent);

    mockEvent = {
      preventDefault: () => { }
    }
    wrapper.instance().handleSubmit(mockEvent)

    expect(handleUserInitMock).toHaveBeenCalled()
  });
})