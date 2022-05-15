export const socket = new WebSocket('ws://localhost:8090')
const sessionID = new Date().getTime() + Math.random()

export function WSpostPhone(data) {
    socket.send(JSON.stringify({
        id: sessionID,
        method: 'update',
        type: 'POST_PHONES',
        data 
    }))
}

export function WSdeletePhone(data) {
    socket.send(JSON.stringify({
        id: sessionID,
        method: 'update',
        type: 'REMOVE_PHONE',
        data 
    }))
}

export function WSconnection() {
    socket.send(JSON.stringify({
        id: sessionID,
        method: 'connection'
    }))
}

export function WSupdateClient(msg, store) {
    const data = JSON.parse(msg.data)
    store.dispatch(data)
}