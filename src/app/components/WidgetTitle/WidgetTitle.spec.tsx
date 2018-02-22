import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import WidgetTitle from './widgetTitle';

describe('WidgetTitle component', () => {
  it('should render title', () => {
    const widgetTitle = TestUtils.renderIntoDocument(<WidgetTitle/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(widgetTitle, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
