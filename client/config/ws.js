export const socket = new WebSocket('ws://localhost:8090')
const sessionID = new Date().getTime() + Math.random()

export function WSpostPhone(data) {
    socket.send(JSON.stringify({
        id: sessionID,
        method: 'update',
        type: 'WS_POST_UPDATE',
        data 
    }))
}

export function WSdeletePhone(data) {
    socket.send(JSON.stringify({
        id: sessionID,
        method: 'update',
        type: 'WS_DELETE_UPDATE',
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