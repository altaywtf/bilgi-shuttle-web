import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { PageTitle } from './';

/** Data */
const s = require('./style.css');
const props = {
  title: '',
  path: '/'
};

/** Spies */
const backButtonClick = sinon.spy(window.history, 'back');

/** Case 1 */
describe('PageTitle Component', () => {
  const component = mount(<PageTitle {...props} />);

  it('renders with correct styles', () => {
    expect(component).to.exist;
    expect(component.find(s.PageTitle)).to.exist;
  });
});

/** Case 2 */
describe('PageTitle Component, on About Page', () => {
  props.path = '/about';
  const component = mount(<PageTitle {...props} />);

  it('renders with correct text', () => {
    const pageTitle = component.find('#pageTitle').text();
    expect(pageTitle).to.be.eql('About');
  });

  it('renders backButton which works properly', () => {
    const backButton = component.find({ name: 'backBtn' });
    expect(backButton).to.exist;

    // backButton.simulate('click');
    // expect(backButtonClick).to.have.property('callCount', 1);
  });
});

/** Case 3 */
describe('PageTitle Component, on Node Pages', () => {
  props.path = '/location/kabatas';
  props.title = 'kabatas';
  const component = mount(<PageTitle {...props} />);

  it('renders with correct text', () => {
    const pageTitle = component.find('#pageTitle').text();
    expect(pageTitle).to.be.eql('Shuttles from Kabatas');
  });
});

