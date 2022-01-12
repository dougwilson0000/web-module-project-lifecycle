import React from 'react';

class Follower extends React.Component {

    render() {
        const { follower } = this.props;
        return (
            <div className='followers'>
            <img width='200px' height='200px' src={follower.avatar_url} />
            <a target='_blank' rel='noreferrer' href={follower.html_url}><p>{follower.login}</p></a>
            </div>
        )
    }
}

export default Follower;