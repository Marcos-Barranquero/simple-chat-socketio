import express from 'express'
import morgan from 'morgan'
import { Server as SocketioServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import { PORT } from './config'

// Express and Socket.io server
const app = express()
const httpServer = http.createServer(app)

const socketioConfig = {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
}

const socketioServer = new SocketioServer(httpServer, socketioConfig)

socketioServer.on('connection', socket => {
  console.log('New client connected')
  socket.on('disconnect', () => console.log('Client disconnected'))
  socket.on('message', message => console.log(`Client ${socket.id} message: ${message}`))
  socket.on('message', message => socket.broadcast.emit('message', message))
})

// Express config
app.use(cors())
app.use(morgan('dev'))

// Start server
httpServer.listen(PORT)
console.log(`Server started on port ${PORT}!`)
