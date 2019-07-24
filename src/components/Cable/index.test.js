import Cable from './index';
import React from 'react';
import { shallow } from 'enzyme';


describe('Cable', () => {
    let mockData = ["test", "another test"]
    let wrapper = shallow(<Cable conversations= {mockData}/>)
    it('should match Snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
