import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return (
            <div id='followers'>
                {
                   this.props.followers.map((follower, index) => {
                       return(<Follower key={index} follower={follower}/>)
                   }) 
                }
            </div>
        )
    }
}

export default FollowerList;