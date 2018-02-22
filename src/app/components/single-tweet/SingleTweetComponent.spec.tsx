import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import SingleTweetComponent from './singleTweetComponent';

describe('SingleTweetComponent component', () => {
  it('should render title', () => {
    const singleTweetComponent = TestUtils.renderIntoDocument(<SingleTweetComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(singleTweetComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
