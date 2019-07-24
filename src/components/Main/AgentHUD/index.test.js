import AgentHUD from './index'
import { shallow } from 'enzyme'
import React from 'react'


describe('AgentHUD', () => {
    let wrapper = shallow( <AgentHUD/>)
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});