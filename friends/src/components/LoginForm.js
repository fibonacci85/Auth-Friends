import React from 'react';
import axios from 'axios';

    class LoginForm extends React.Component{


    state = {
    credentials:{
    username:"",
    password:""
    }};

    handleChange = (e) => {
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
    };

    login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login',this.state.credentials)
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }


render(){
return(
<>
<h2>Friend Form:</h2>
<form onSubmit={this.login}>
    <input
       type="text"
       name="username"
       value={this.state.credentials.username}
       onChange={this.handleChange}
       placeholder="username:"
    />
    <br/>
    <input
       type="password"
       name="password"
       value={this.state.credentials.password}
       onChange={this.handleChange}
       placeholder="password:"
    />
    <br/>
    <br/>
    <button>login</button>
</form>
</>
)
}
}

export default LoginForm;

