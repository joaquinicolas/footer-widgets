import * as React from 'react';

export interface ISingleTweetComponentProps {
  content: string;
  href?: string;
  tweetTime?: Date;
};

const SingleTweetComponent: React.SFC<ISingleTweetComponentProps> = (props) => {
  return (
    <div className='single-tweet'>
      <p>{props.content} <br />
        <a href='https://t.co/kN5OPEuPzx'>{props.href}</a></p>
      <h4><i className='fa fa-twitter'></i>{props.tweetTime}</h4>
    </div>
  );
}

export default SingleTweetComponent;