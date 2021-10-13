import React from 'react';
// import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    render(){
        console.log(this.state.credentials);
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='username' 
                        value={this.state.credentials.username} 
                        placeholder="Username" 
                        onChange={this.handleChange}
                        />
                    <input 
                        type='text' 
                        name='password' 
                        value={this.state.credentials.password} 
                        placeholder="Password"
                        onChange={this.handleChange} 
                        />
                    <button>Go</button>
                </form>
            </div>
        )
    }
}

export default Login;