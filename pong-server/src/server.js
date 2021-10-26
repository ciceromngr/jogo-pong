import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: process.env.HOST_FRONT
    }
})

io.on('connection', (socket) => {
    console.log(socket.id)
})

const PORT = process.env.EXPRESS_PORT || 3333

httpServer.listen(PORT, () => console.log(`Server is running on port:${PORT}`))