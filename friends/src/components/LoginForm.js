import React from 'react';
import axios from 'axios';

    class LoginForm extends React.Component{


    state = {
    username:"",
    password:""
    };

    handleChange = (e) => {
    this.setState({
            ...this.state,
            [e.target.name]: e.target.value
    });
    };

    login = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/api/login',this.state)
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');   /// ('/protected) ?
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
       value={this.state.username}
       onChange={this.handleChange}
       placeholder="username:"
    />
    <br/>
    <input
       type="password"
       name="password"
       value={this.state.password}
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

