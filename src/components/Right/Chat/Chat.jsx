import React, {useState, useEffect} from 'react'
import Message from './Message'
import MessageForm from './MessageForm'

export default function Chat() {
    const [messages, setMessages] =useState([])
    const postUrl =''
    const getUrl = ''

    const sendMessage = (text) => {
        const newMessage ={text, sender :' User'}
        setMessages([...messages, newMessage])
    }

    
  return (
    <div>
      <h1>Chat Function</h1>
      <div>
        {messages.map((message, index) => (
            <Message key={index} text={message.text} sender ={message.sender}/>
        ))}
  
      </div>
      <MessageForm sendMessage={sendMessage}/>
    </div>
  )
}
