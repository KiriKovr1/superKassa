import { wsConnection, wsUpdate} from "../controllers/ws.controller.js";

export function WSrouter (ws, getWss) {
    ws.on('message', (msg) => {
        const msgBody = JSON.parse(msg)
        switch (msgBody.method) {
            case 'connection': {
                wsConnection(ws, msgBody)
                break;
            }
            case 'update': {
                wsUpdate(msgBody, getWss)
                break;
            }
        }
    })
}