import express from 'express'
import morgan from 'morgan'
import { Server as SocketioServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import { PORT } from './config'

const app = express()
const httpServer = http.createServer(app)
const socketioServer = new SocketioServer(httpServer)

socketioServer.on('connection', socket => {
  console.log('New client connected')
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

app.use(cors())
app.use(morgan('dev'))

app.listen(PORT)

console.log(`Server started on port ${PORT}!`)
