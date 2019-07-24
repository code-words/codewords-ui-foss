import AgentHUD from './index'
import { shallow } from 'enzyme'
import React from 'react'


describe('AgentHUD', () => {
    let mockHint = {hint: 'test'}
    let wrapper = shallow( <AgentHUD hint={mockHint}/>)
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});