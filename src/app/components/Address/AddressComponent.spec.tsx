import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import AddressComponent from './addressComponent';

describe('AddressComponent component', () => {
  it('should render title', () => {
    const addressComponent = TestUtils.renderIntoDocument(<AddressComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(addressComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
