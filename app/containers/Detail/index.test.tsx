import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Detail } from './';

/** Data */
const data = [{
  'routes': [
    {
      'raw_data': '08:00 - Ring - 20:00',
      'destination': 'Santral',
      'next': {
        'in_secs': 23159,
        'ring': false,
        'next_next_one': '20:00'
      },
      'start': {
        'image': '/media/nodes/kabatas_JtKuUYU.png',
        'id': 8,
        'name': 'Kabataş'
      },
      'destination_image': '/media/nodes/santral_AD5d4PA.png'
    }
  ],
  'start_node': {
    'image': '/media/nodes/kabatas_JtKuUYU.png',
    'id': 8,
    'name':
    'Kabataş'
  }
}];

const props = {
  routes: {
    isFetching: false,
    data
  },
  params: {
    node: 'kabatas'
  },
  getRoutes: sinon.spy()
};

/** Spies */
const getCurrentRoutes = sinon.spy(Detail.prototype, 'getCurrentRoutes');

/** Case 1: Full Data */
describe('Detail Container, Filled Data', () => {
  const component = mount(<Detail {...props} />);

  it('renders RouteItem components with the same length of data', () => {
    expect(component.find('RouteItem')).to.have.length(1);
  });
});

/** Case 2: Empty Data */
describe('Detail Container, Empty Data', () => {
  props.routes.data = [];
  const component = mount(<Detail {...props} />);

  it('calls getRoutes', () => {
    expect(props.getRoutes).to.have.property('callCount', 1);
  });
});
