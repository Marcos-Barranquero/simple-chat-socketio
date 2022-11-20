import './App.css'
import io from 'socket.io-client'
import { BACKEND_PORT } from './config'
import { useState, useEffect } from 'react'

const socket = io(`http://localhost:${BACKEND_PORT}/`)

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const receiveMessage = message => console.log(message)

    socket.on('message', receiveMessage) // listen for message from server

    return () => socket.off('message') // unsubscribe
  }, [])

  const handleInput = e => setMessage(e.target.value) // updates message state
  const handleSubmit = e => {
    e.preventDefault() // prevent page reload
    socket.emit('message', message) // send message to server <key, value>
    setMessage('') // clear input
  }

  return (
    <div className='App'>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' onChange={e => handleInput(e)} value={message} />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App
