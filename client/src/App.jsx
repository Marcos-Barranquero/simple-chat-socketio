import './App.css'
import io from 'socket.io-client'
import { BACKEND_PORT } from './config'

const socket = io(`http://localhost:${BACKEND_PORT}/`)

function App() {
  return (
    <div className='App'>
      <h1>Hello world!</h1>
    </div>
  )
}

export default App
