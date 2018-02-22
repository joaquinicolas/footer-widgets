import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import TwitterComponent from './twitterComponent';

describe('TwitterComponent component', () => {
  it('should render title', () => {
    const twitterComponent = TestUtils.renderIntoDocument(<TwitterComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(twitterComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
