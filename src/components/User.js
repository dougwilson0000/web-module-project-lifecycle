import React from 'react';

class User extends React.Component {

    render() {

        const { user } = this.props;
        return (
            <div className='gituser'>
        <img src={user.avatar_url} height='200px' width='200px'/>
       <a target='_blank' rel='noreferrer' href={user.html_url}> <h2>{user.name}</h2></a> 
        <p>{user.login}</p>
        <p>Total Repos: <span>{user.public_repos}</span></p>
        <p>Total Followers: <span>{user.followers}</span></p>

      </div>

        )
    }
}


export default User;
