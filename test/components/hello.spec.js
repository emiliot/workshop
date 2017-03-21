import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Hello from '../../src/components/Hello';

describe('<Hello />', function () {
  it('should render base component', function () {
    const wrapper = shallow(<Hello hello='world'/>);
    expect(wrapper.find('h1').text()).to.equal('Testing jsx world');
  })
})
