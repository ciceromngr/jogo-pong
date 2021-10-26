import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = Server(httpServer)

const PORT = process.env.EXPRESS_PORT || 3333

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))