import { mountComponent } from '../../helpers/Test';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Home } from './';

console.info('*** HOME 1 ***');

/** ************************************************************************ */
// Spies

const componentWillMount = sinon.spy(Home.prototype, 'componentWillMount');
const handleClick = sinon.spy(Home.prototype, 'handleClick');

/** ************************************************************************ */

describe('Home with Filled Data', () => {
  const props = {
    nodes: {
      isFetching: false,
      data: [
        {
          id: 1,
          name: 'Santral',
          image: '/santral.jpg'
        }
      ]
    }
  };

  const component = mountComponent(Home, props);

  it('calls componentWillMount', () => {
    expect(componentWillMount).to.have.property('callCount', 2);
  });

  it('calls handleClick on homeBtn Click', () => {
    component.find('[name="homeBtn"]').simulate('click');
    expect(handleClick).to.have.property('callCount', 1);
  });

});

/** ************************************************************************ */

describe('Home with Empty Data', () => {
  const props = {
    nodes: {
      isFetching: false,
      data: []
    },
    getNodes: sinon.spy()
  };

  const component = mountComponent(Home, props);

  it('calls componentWillMount', () => {
    expect(componentWillMount).to.have.property('callCount', 2);
  });

  it('calls getNodes', () => {
    expect(props.getNodes).to.have.property('callCount', 1);
  });

});

/** ************************************************************************ */
