import { renderComponent } from '../../helpers/Test';
import { expect } from 'chai';
import { Home2 } from './';

console.info('*** HOME 2 ***');

describe('Home 2', () => {
  const appState = {
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

  // const component = renderComponent(Home2, appState);
  // console.info(component);
  // console.info(component.props()); --> gives Error

});
