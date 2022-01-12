import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

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

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp=> {
      this.setState({
       ...this.state,
        user: resp.data
      });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(resp=> {
      this.setState({
       ...this.state,
        followers: resp.data
      });
    })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp=> {
      this.setState({
       ...this.state,
        user: resp.data
      });
    })
  }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} defaultValue='Github Value' />
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
