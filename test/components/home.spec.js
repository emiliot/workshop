import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import Home from '../../src/components/Home';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Home /> base test', function () {
  it('should render base component', function () {
    const wrapper = mount(
      <Router>
        <Home />
      </Router>);
    expect(wrapper.find('a')).to.have.length(1);
  })
})
