export function wsConnection(ws, data) {
    ws.id = data.id
}

export function wsUpdate(data, getWss) {
    getWss().clients.forEach(client => {
        if (client.id !== data.id) {
            client.send(JSON.stringify(
                data
            ))
        }
    })
} 