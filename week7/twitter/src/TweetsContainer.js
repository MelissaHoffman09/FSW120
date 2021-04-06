import React from 'react';
import TweetData from './TweetData.json';
import NewTweets from './NewTweets';
import Tweet from './Tweet';

class TweetContainer extends React.Component {
    
    render() {
        return (
            <div id="tweetFrame">

                <h3>Tweets</h3>

                {this.props.tweetList.reverse().map(tweet => {
                    return (
                        <NewTweets tweetInfo ={tweet} />)
                    })
                }

                {TweetData.map(tweet => {
                    return (
                        <Tweet tweetInfo ={tweet} />)
                    })
                }

            </div>
        )
    }
}

export default TweetContainer;