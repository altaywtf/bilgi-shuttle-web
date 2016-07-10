import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Loader } from './';

/** Data */
const s = require('./style.css');

/** Case 1 */
describe('Loader Component', () => {
  const component = mount(<Loader />);

  it('renders with correct styles', () => {
    expect(component).to.exist;
    expect(component.find(s.Spinner)).to.exist;
  });
});
