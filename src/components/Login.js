import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            // login: false
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    //updates the username when the user submits it's username and prevents the website from refreshing
    onSubmit(e) {
        e.preventDefault();
        //  this.props.onLogin()
        this.setState({
            username: this.props.username
        })
    }

    //validation for username in login input, if the validation is correct then the user will be send to Chat screen. Also add input for login for the user to type in his/hers username and button to submit that 
    render() {
        if(/^[a-zA-Z\d_-\s]{1,12}$/.test(this.state.username)) {
            return <Redirect to='/AddMessage' />;
        }
        return (
            <div className='Login'><h1>Please Login</h1>
            <div>
            <form onSubmit={this.onSubmit}>
                <input style ={inputLogin}
                text='text'
                placeholder='Your username...'
                onChange={this.props.setUsername}>
                </input>
            </form>
            <button style ={loginButton} onClick={this.onSubmit}>Login</button>
            </div>
            </div>
        )
    }
}

//styling for login input
const inputLogin = {
    fontSize: '40px',
    backgroundColor: '#C8C8C8',
    color: 'white',
    borderColor: 'black'
}

const loginButton = {
    fontSize: '40px',
    backgroundColor: '#383838',
    color: 'white',
}
export default Login