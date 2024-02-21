import React,{useState} from 'react'

export default function MessageForm() {

    const MessageForm = ({sendMessage}) => {
        const [text, setText] = useState()
    
        const handleSubmit = (e) => {
            e.preventDefault()
            if(!text.trim())
            return
        sendMessage(text)
        setText()
    }


  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Type a message' type="text" value={text} onChange={ (e) => 
        setText(e.target.value)}></input>
        <button type='Send'></button>
        
    </form>
  )
}
}
