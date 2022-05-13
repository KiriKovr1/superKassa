import express from 'express'
import WSServer from 'express-ws'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'

import phonesRouter from './routes/phones.router.js'
import { WSrouter } from './routes/ws.router.js'

import { Html } from '../client/html.js'

const server = express()
const PORT = process.env.PORT || 8090
const __dirname = process.cwd()
const { app, getWss } = WSServer(server)

const middleware = [
    cors(),
    cookieParser(),
    express.json({ limit: '50kb' }),
    express.static(resolve(__dirname, 'dist'))
]

middleware.forEach((it) => server.use(it))

app.ws('/', (ws, req) => {
    WSrouter(ws, getWss)
})

server.use('/api', phonesRouter)

server.get('/*', (req, res) => {
    const initialState = {
        location: req.url
    }

    res.send(
        Html({
            body: '',
            initialState
        })
    )
})

server.listen(PORT, () => {
    console.log(`serving at http://localhost${PORT}`)
})