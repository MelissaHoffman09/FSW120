import React from 'react';
import SideBar from './SideBar';
import TweetsContainer from './TweetsContainer';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tweet: {
        id: 10,
        handle: "life_of_a_jedi",
        tweetContent: ""
      },
      tweetList: []
    }
  }

  handleCreateTweet = (props) => {
    let form = document.getElementById("inputForm");

    let newTweet = form.tweetContent.value;

    console.log(newTweet)

      this.setState((prevstate) => ({
          tweet: {id: prevstate.tweet.id + 1,
                  handle: this.state.tweet.handle,
                  tweetContent: newTweet}
          }), () => this.updateTweetList(this.state.tweet)
          )

      console.log(this.state.tweetList)

  }

  updateTweetList = () => {
    this.setState({
      tweetList: this.state.tweetList.concat(this.state.tweet)
  })     

  }


  render() {

    return (     
      <div className="App">
        <nav id="navbar">
          <img id="logo" src="https://i.pinimg.com/originals/66/05/cb/6605cb621fc65ae3d25c036ad0868e18.jpg" alt="twitter"/>
        </nav>
        <SideBar onAddNewTweet={this.handleCreateTweet} />
        <TweetsContainer tweet={this.state.tweet} tweetList={this.state.tweetList} />
      </div>
    )
  }
}

export default App;