import React, { useState,useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';



function FriendsList() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <>
        <h3>My Friends</h3>
        <FriendForm />
        {friends.map((friend) => (
            <>
         <h3>{friend.name}</h3>
         <p>{friend.age}</p>
         <p>{friend.email}</p>
            </>
        ))}
        </>
    )
}


export default FriendsList;