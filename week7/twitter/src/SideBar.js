import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        newTweet: ""
      }
    }

    onFormPost =(event)=>{
        event.preventDefault();

        let form = document.getElementById("inputForm");

        let newTweet = form.tweetContent.value;
        this.setState({newTweet: newTweet});

        this.props.onAddNewTweet(this.state.newTweet);

        form.tweetContent.value = "";
    }


    render() {
        return(
            <div id="sideBar">
            <ul>
                <li>
                    <img id="profile" src="https://images.pexels.com/photos/3739059/pexels-photo-3739059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar" />
                </li>
                <li id="username">life_of_a_jedi</li>
                <li><em>Edit Profile</em></li>
                <li>Discover</li>
                <li>Followers</li>
                <li>Following</li>
                <li><em>Sign out</em></li>
                <br/>
                <form id="inputForm" onSubmit={this.onFormPost}>
                    <textarea id="tweetContent" name="tweetContent" placeholder="What's happening?" onChange={(event) => this.setState({newTweet: event.target.value})} />
                    <button id="submitButton" onClick={this.onFormPost}>Submit</button>
                </form>
            </ul>
            </div>
        )
    }
}

export default SideBar;