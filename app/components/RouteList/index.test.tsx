import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { RouteList } from './';

/** Case 1 */
describe('RouteList Component, Loading State', () => {
  const component = mount(<RouteList isFetching={true} />);

  it('renders Loader component', () => {
    expect(component.find('Loader')).to.exist;
  });
});
