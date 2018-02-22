import * as React from 'react';
import WidgetTitle, { TEXT } from '../WidgetTitle/WidgetTitle';
import SingleTweetComponent from '../single-tweet/singleTweetComponent';

export interface Tweet {
  content: string;
  time: Date;
  url: string;
}
interface ITwitterComponentProps {
  tweets: Tweet[]
};

function renderTweets(tweets: Tweet[]) {
  return tweets.map((t: Tweet) => {
    <SingleTweetComponent content={t.content} href={t.url} tweetTime={t.time} />
  })
}
const TwitterComponent: React.SFC<ITwitterComponentProps> = props => {
  return (
    <div className='footer-widget twitter-widget'>
      <WidgetTitle type={TEXT} text='Latest Tweets' />
      {
        renderTweets(props.tweets)
      }
    </div>
  );
};