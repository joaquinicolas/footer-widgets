import * as React from 'react';

export const IMAGE = 'image',
  TEXT = 'text';
type imageType = typeof IMAGE;
type textType = typeof TEXT;
type Titling = imageType | textType;

export interface IWidgetTitleProps {
  type: Titling;
  image?: string;
  text?: string;
};

interface IWidgetTitleState { };

export default class WidgetTitle extends React.Component<IWidgetTitleProps, IWidgetTitleState> {

  static defaultProps = {
    type: TEXT,
    text: 'Default Title'
  };

  _renderImageTitle() {
    return (
      <div className='widget-title'>
        <img src={this.props.image} />
      </div>
    );
  }

  _renderTextTitle() {
    return (
      <h2 className='widget-title text-uppercase'>{this.props.text}</h2>
    );
  }

  render() {
    if (this.props.type === TEXT) {
      return this._renderTextTitle();
    } else {
      return this._renderImageTitle();
    }
  }
}