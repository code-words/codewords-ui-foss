import ConfDialog from './index'
import React from 'react'
import { shallow } from 'enzyme'

describe('ConfDialog', () => {
    let wrapper = shallow(<ConfDialog/>)
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});