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
    <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <form onSubmit={e => handleSubmit(e)} className='bg-zinc-900 p-40'>
        <h1 className='text-2xl font-bold my-2'>Chat react</h1>
        <input type='text' onChange={e => handleInput(e)} value={message} className='border-2 border-zinc-500 p-2 text-black w-full' />
        {/*<button className='bg-blue-500'>Send</button>*/}
        <ul className='h-80 overflow-y-auto p-20 w-100'>
          {messages.map((message, index) => (
            <li key={index} className={`my-2 p-2 table  ${message.from === 'Me' ? 'bg-sky-800 ml-auto' : 'bg-black'}`}>
              <p>
                {message.from}: {message.body}
              </p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App
