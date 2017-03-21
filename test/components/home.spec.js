import React from 'react';
import {render} from 'enzyme';
import {expect} from 'chai';
import Home from '../../src/components/Home';
import {MemoryRouter as Router} from 'react-router-dom';

describe('<Home /> base test', function () {
  it('should render base component', function () {
    const wrapper = render(
      <Router>
        <Home />
      </Router>);
    expect(wrapper.find('a')).to.have.length(1);
  })
})
