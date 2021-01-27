import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component{

    state = {
        friends: []
    };

    getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            this.setState({
                friends: res.data.friends
            })
        })
        .catch(err => {
            console.log(err.response.data.error)
        })
    }

    // friendData = () => {
    //     const theData = [];
    //     this.state.friends.forEach((id, index, arr) => {

    //     })
    // }


    render(){
    return (
        
        <>
        <h3>Friends...</h3>
        {this.state.friends.map(item => {
            return (
            <h1>{item.name}</h1>)
        })}
        </>
    )
}
}

export default FriendsList;