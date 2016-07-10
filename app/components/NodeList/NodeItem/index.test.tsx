import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { NodeItem } from './';

/** Data */
const s = require('./style.css');

const props = {
  data: {
    image: '/media/nodes/kabatas_JtKuUYU.png',
    id: 8,
    name: 'Kabataş'
  },
  onClick: sinon.spy()
};

/** Case 1 */
describe('NodeItem Component', () => {
  const component = mount(<NodeItem {...props} />);

  it('renders with correct style', () => {
    expect(component).to.exist;
    expect(component.find(s.NodeItem)).to.exist;
  });
});
