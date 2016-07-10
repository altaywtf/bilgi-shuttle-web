import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { NodeList } from './';

/** Case 1 */
describe('NodeList Component, Loading State', () => {
  const component = mount(<NodeList isFetching={true} />);

  it('renders Loader component', () => {
    expect(component.find('Loader')).to.exist;
  });
});
