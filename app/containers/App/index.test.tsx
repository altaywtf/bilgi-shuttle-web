import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { App } from './';

/** Data */
const s = require('./style.css');
const props = {
  params: {
    node: undefined
  },
  location: {
    pathname: '/'
  }
};

/** Case 1 */
describe('App Container', () => {
  const component = mount(<App {...props} />);

  it('renders with correct styles', () => {

    expect(component).to.exist;
    expect(component.find(s.App)).to.exist;
    expect(component.find(s.Content)).to.exist;
  });

});
