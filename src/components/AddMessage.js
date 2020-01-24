import React, { Component } from 'react';
import Linkify from 'react-linkify';
import {emojify} from 'react-emojione';
import Header from './layout/Header.js'


 class AddMessage extends Component {
    constructor(props) {
     super(props);
    this.state = {
         newToMessage: [],
         content: '',
      }
    }

    componentDidMount() {
        this.newMsg = [];
    }

    // onSubmit(e) {
    //     e.preventdefault();
    //     this.setState({
            
    //         login: true
            
    //     })
        
    // }
   
    //When username is submitted, the value of input will be send to server and will be shown on Chat screen , also the value of input wil be empty when username is submitted
    onSubmit = (e) => {
        e.preventDefault();
        //I use if statement to alert the user if he types in more than 200 characters in input on Chat screen, if he/she does that then the user can not send the message
        if(this.state.content.length <= 200) {

        this.setState({ username: this.state.username, content: this.state.content, content: '' });
        
        //sends this.state.content which is text you type in to server
        this.props.socket.emit('message', {
            username: this.props.username,
            content: this.state.content
        }, (response) =>{
            this.setState({
                newMsg: [...this.newMsg, response.data.newMessage]
            });
        //makes your text you type in visible on the Chat screen
            let newArray = this.props.AllMessages;
            newArray.push(response.data.newMessage);
            this.setState({
                newToMessage: newArray   
            });
            this.props.getMsgArr(this.state.newToMessage);
        })
    }else{
       alert('To many characters! Max 200!')
    }
}



    onChange = (e) => this.setState({ content: e.target.value });

//create input for message typing and button to send the message and also add Header in Chat screen
//Here I also add Linkify and emojify which lets the user to use the links and emojis in the chat creen
    render() {
        return (
           <>
            <Header />
            <div className='textContainer'>
                {this.props.AllMessages.map(message =>
                <p style={liStyle} key={message.id}>
                  <span>{message.username}:<Linkify>{emojify(message.content)}</Linkify></span>
                </p>)}
            </div>
            <form onSubmit={this.onSubmit} className='formContainer'>
                <input
                     type='text'
                     name='title'
                     placeholder='Type a message ...'
                     value={this.state.content}
                     onChange={this.onChange}
                     className='input'
                     style={inputStyle}
                 />
                 <button style={buttonStyle}
                    type='submit' 
                    className='btn' 
                 >Send</button>
            </form>    
            </>  
        )
    }
}

//styling for text in chat screen
const liStyle = {
    backgroundColor: '#f4f4f4',
    fontSize: '20px',
  }

  //styling for button in chat screen
  const buttonStyle = {
      backgroundColor: '#383838',
      color: 'white',
      marginTop: '200px'
  }

  const inputStyle = {
      marginTop: '200px',
      backgroundColor: '#C8C8C8',
      borderColor: 'black'
  }
export default AddMessage
