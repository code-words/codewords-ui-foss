import React from 'react';
import NewGame from '.';
import { shallow } from 'enzyme';

describe('NewGame', () => {
  let wrapper;
  let mockState;
  let handleUserInitMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NewGame handleUserInit= {handleUserInitMock} />);
    mockState = {
      name: '',
      redirect: false
    }
  });

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on user input', () => {
    expect(wrapper.state()).toEqual(mockState);

    const input = 'testUser';
    const expectedState = {...mockState};
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

    // Setup for input
    const expectedState = { name: 'testUser', redirect: false };
    let mockEvent = {
      target: {
        name: 'name',
        value: 'testUser'
      }
    }
    // Execution for input
    wrapper.instance().handleChange(mockEvent);
    // Evaluate for input
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

  it('should call handleUserInit w/ response from Post', async () => {
    let spy = jest.spyOn(global, "fetch")
    let mockEvent = {
      target: {
        name: 'name',
        value: 'testUser'
      }
    }
    wrapper.instance().handleChange(mockEvent);
    mockEvent = { preventDefault: () => { } }
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.state('redirect')).toEqual(true)
    expect(spy).toHaveBeenCalled()
  });
})