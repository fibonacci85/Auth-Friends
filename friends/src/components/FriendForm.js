// import axios from 'axios';
import React from 'react';
import {v4 as uuid} from 'uuid';


export class FriendForm extends React.Component {

  state = {
      friend: {
          id:uuid(),
          name: '',
          age: '',
          email: ''
      }
  }

  handleChange = e => {
      this.setState({
          friend:{
          ...this.state.friend,
          [e.target.name]: e.target.value
          }
      });
  };

  /// working on the addFriend feature... 
  
  addFriend = e => {
    //   e.preventDefault();
    //   axios.get('http://localhost:5000/api/friends/:id', this.state.friend)
    //   .then(res => {
    //       localStorage.setItem(res.data.payload)
    //   })

  }

  
    render(){
    return(
        
        <form onSubmit={this.addFriend}>
            <input
                type="text"
                name="name"
                value={this.state.friend.name}
                onChange={this.handleChange}
                placeholder="Full Name"
             /><br/>
            <input
                type="number"
                name="age"
                value={this.state.friend.age}
                onChange={this.handleChange}
                placeholder="Age"
             /><br/>
            <input
                type="email"
                name="email"
                value={this.state.friend.email}
                onChange={this.handleChange}
                placeholder="E-Mail"
             /><br/><br/>
            <button>Add Friend</button>
        </form>
    
    )
}
}

export default FriendForm;