import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { RouteItem } from './';

/** Data */
const s = require('./style.css');

const props = {
  data: {
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
};

/** Case 1 */
describe('RouteItem Component', () => {
  const component = mount(<RouteItem {...props} />);

  it('renders with correct style', () => {
    expect(component).to.exist;
    expect(component.find(s.RouteItem)).to.exist;
  });
});
