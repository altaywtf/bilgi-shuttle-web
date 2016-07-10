import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { About } from './';

/** Data */
const s = require('./style.css');

/** Case 1 */
describe('About Container', () => {
  const component = mount(<About />);

  it('renders with correct style', () => {
    expect(component).to.exist;
    expect(component.find(s.About)).to.exist;
  });
});
