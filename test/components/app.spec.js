import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from '../../src/components/app';

describe('<App> base test', function () {
    it('should render base component', function () {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).to.have.length(1);
    })
})
