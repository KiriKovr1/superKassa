import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import createRootReducer from './reducer/index.js'
import { socket, WSconnection, WSupdateClient } from "../config/ws.js"
import { WSconnected, WSdisConnected } from './reducer/connection.js'

const middleware = [thunk]
const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composedEnchanters = composeFunc(applyMiddleware(...middleware))
const store = createStore(createRootReducer(), initialState, composedEnchanters)

socket.onopen = () => {
    WSconnection()
    store.dispatch(WSconnected())
}
socket.onclose = () => {
    store.dispatch(WSdisConnected())
}
socket.onmessage = (msg) => {
    WSupdateClient(msg, store)
}

export default store  