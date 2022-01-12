import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {

  state = {
    currentUser: 'dougwilson0000',
    user: {
    avatar_url: "https://avatars.githubusercontent.com/u/92924114?v=4",
    html_url: "https://github.com/dougwilson0000",
    name: "Douglas O Wilson",
    login: "dougwilson0000",
    public_repos: 33,
    followers: 0
    },
    followers: [
      {
        login: "dougwilson0000",
        avatar_url: "https://avatars.githubusercontent.com/u/92924114?v=4",
        html_url: "https://github.com/dougwilson0000"
      }
    ] 

  }
  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input defaultValue='Github Value' />
        <button>Search</button>

      </form>
      <User user={this.state.user}/>
      
      

      <div id='followers'>
        <h2>FOLLOWERS:</h2>
        <FollowerList followers={this.state.followers}/>
       
        
      </div>
    </div>);
  }
}

export default App;
