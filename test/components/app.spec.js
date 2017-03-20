import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import App from '../../src/components/app';

describe('<App> base test', function () {
  it('should render base component', function () {
    const wrapper = mount(<App />);
    expect(wrapper).to.have.length(1);
  })
})
