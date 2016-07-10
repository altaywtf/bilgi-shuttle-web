import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Footer } from './';

/** Data */
const s = require('./style.css');

/** Case 1 */
describe('Footer Component', () => {
  const component = mount(<Footer />);

  it('renders with correct styles', () => {
    expect(component).to.exist;
    expect(component.find(s.Footer)).to.exist;
  });
});
