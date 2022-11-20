import './App.css'
import io from 'socket.io-client'
import { BACKEND_PORT } from './config'
import { useState, useEffect } from 'react'

const socket = io(`http://localhost:${BACKEND_PORT}/`)

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      body: 'Welcome to the chat!',
      from: 'Web',
    },
  ])

  useEffect(() => {
    const receiveMessage = message => {
      setMessages([message, ...messages])
    }

    socket.on('message', receiveMessage) // listen for message from server

    return () => socket.off('message') // unsubscribe
  }, [messages])

  const handleInput = e => setMessage(e.target.value) // updates message state
  const handleSubmit = e => {
    e.preventDefault() // prevent page reload
    socket.emit('message', message) // send message to server <key, value>
    setMessage('') // clear input
    const newMessage = {
      body: message,
      from: 'Me',
    }
    setMessages([newMessage, ...messages]) // add message to messages state
  }

  return (
    <div className='App'>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' onChange={e => handleInput(e)} value={message} />
        <button>Send</button>
      </form>

      {messages.map((message, index) => (
        <div key={index}>
          <p>
            {message.from}: {message.body}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
