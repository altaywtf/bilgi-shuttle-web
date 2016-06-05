import { renderComponent } from '../../helpers/TestHelper';
import { expect } from 'chai';

import { About } from './About';

describe('About Page', () => {

  const component = renderComponent(About);

  it('exist', () => {
    expect(component).to.exist;
  });

});
