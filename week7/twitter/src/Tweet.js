import React from 'react';

class Tweet extends React.Component {
 
    deleteTweet = (event) => {
        console.log(event.target.id)
        let thisTweet = document.getElementById(event.target.id)
        thisTweet.remove()
    }

    render() {
    
        return (
            <div className="tweetLine" key={this.props.tweetInfo.id} id={this.props.tweetInfo.id}>
                <h4 className="handler" key={this.props.tweetInfo.handle}>@{this.props.tweetInfo.handle}</h4>
                <p className="content" key={this.props.tweetInfo.tweetContent}>{this.props.tweetInfo.tweetContent}</p>
                <img id="heart" src="https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Heart-300x300.png" alt="liked"/>
                <img id='retweet' src="https://icon-library.com/images/retweet-icon-png/retweet-icon-png-10.jpg" alt="retweet"/>
                <img id='comment' src="https://www.iconsdb.com/icons/preview/green/comments-xxl.png" alt="comment"/>
                <br/>
            </div>
        )
    }
}

export default Tweet;