import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'
import countryCodeRouter from './routes/countyCode.router.js'
import phonesRouter from './routes/phones.router.js'

import { Html } from '../client/html.js'

const server = express()
const PORT = process.env.PORT || 8090
const __dirname = process.cwd()

const middleware = [
    cors(),
    cookieParser(),
    express.json({limit: '50kb'}),
    express.static(resolve(__dirname,'dist'))
]

middleware.forEach((it) => server.use(it))

server.use('/api', [countryCodeRouter, phonesRouter])


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