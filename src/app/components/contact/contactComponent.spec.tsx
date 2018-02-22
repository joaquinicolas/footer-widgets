import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import ContactComponent from './contactComponent';

describe('ContactComponent component', () => {
  it('should render title', () => {
    const contactComponent = TestUtils.renderIntoDocument(<ContactComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(contactComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
