import React, {Component} from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import AddMessage from './components/AddMessage';
import io from 'socket.io-client';
import Login from './components/Login.js';
import './App.css';



//In the first state we have AllMessages which will hold all messages from the server and username will hold the name that user types in when he wants to Login.
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     AllMessages: [],
     username: '',
    //  login: false
   }
   this.socket = io('http://3.120.96.16:3000');

   this.getMsgArr = this.getMsgArr.bind(this);
   this.setUsername = this.setUsername.bind(this)
   //this.onLogin = this.onLogin.bind(this)

 }

 
 //Updates the name of username to the value the user types in the Login input 
 setUsername(e) {
   this.setState({
     username: e.target.value
   })
 }

 //When the user is on login page the login will be false and when the user submits the login input the login will be set to true and then it will render chat screen
//  onLogin() {
//    this.setState({
//      login: true
//    });
//  }

 //All messages(data) from server will be saved in AllMessages array and then in second socket.on where message is sent which is an object in setState with key AllMessages it will be updated with method setState()
  componentDidMount() {
    this.socket.on('messages', data => {
      this.setState({AllMessages: data});
    });
    this.socket.on('new_message', data => {
      this.state.AllMessages.push(data)

      this.setState( {  AllMessages: this.state.AllMessages })
    })
  }

  getMsgArr(array) {
   this.setState({
   })
  }

 
  // Here I use Router to navigate from login screen to chat screen
 render() {
    //When the user is on login page the login will be false and when the user submits the login input the login will be set to true and then it will render chat screen
    //  if(this.state.login === true) {
    //    return <AddMessage AllMessages={this.state.AllMessages} getMsgArr={this.getMsgArr} socket={this.socket} AllMessages={this.state.AllMessages} addMessage={this.addMessage} username = {this.state.username}/> 
    //   }
    return (
      <Router>
           <div className="App">
             <Route path='/' exact render={ () =>  <Login onLogin={this.onLogin} setUsername={this.setUsername} username={this.state.username} />} />
             <Route path='/AddMessage' exact render={()=> <AddMessage AllMessages={this.state.AllMessages} getMsgArr= {this.getMsgArr} socket={this.socket}  username = {this.state.username} addMessage={this.addMessage} />} />
          </div>
      </Router>
    );
   }
 }

export default App;

