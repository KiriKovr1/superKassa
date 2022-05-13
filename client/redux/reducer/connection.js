const CONNECTED = 'CONNECTED'
const DISCONNECTED = 'DISCONNECTED'

const initialState = {
    isConnected: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONNECTED: {
            return {
                ...state,
                isConnected: true
            }
        }
        case DISCONNECTED: {
            return {
                ...state,
                isConnected: false
            }
        }
        default:
            return state
    }
}

export function WSconnected() {
    return { type: CONNECTED }
}
export function WSdisConnected() {
    return { type: DISCONNECTED }
}