import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Home } from './';

/** Data */
const props = {
  nodes: {
    isFetching: false,
    data: [
      {
        id: 1,
        name: 'Santral',
        image: '/media/nodes/santral_AD5d4PA.png'
      }
    ]
  },
  getNodes: sinon.spy(),
  push: sinon.spy()
};

/** Spies */
const handleNavigate = sinon.spy(Home.prototype, 'handleNavigate');

/** Case 1: Full Data */
describe('Home Container, Filled Data', () => {
  const component = mount(<Home {...props} />);

  it('renders NodeItem components with the same length of data', () => {
    expect(component.find('NodeItem')).to.have.length(1);
  });

  it('calls handleNavigate on nodeItem Click', () => {
    component.find({ name: 'nodeItem' }).first().simulate('click');
    expect(handleNavigate).to.have.property('callCount', 1);
  });
});

/** Case 2: Empty Data */
describe('Home Container, Empty Data', () => {
  props.nodes.data = [];
  const component = mount(<Home {...props} />);

  it('calls getNodes', () => {
    expect(props.getNodes).to.have.property('callCount', 1);
  });
});
