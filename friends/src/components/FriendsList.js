import React, { useState,useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {FriendForm} from './FriendForm';




function FriendsList() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
            axiosWithAuth()
            .get("/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
        <h3>Friends</h3>
        <FriendForm />

        {friends.map((friend) => (
            <>
         <h3 key={friend.id}>{friend.name}</h3>
         <p key={friend.id}>{friend.age}</p>
         <p key={friend.id}>{friend.email}</p>
            </>
        ))}
        </>
    )
}


export default FriendsList;