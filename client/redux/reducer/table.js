import axios from "axios"

const GETPHONES = 'GETPHONES'
const POSTPHONES = 'POSTPHONES'

const initialState = {
    loaded: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GETPHONES: {
            return {
                ...state, 
                phonesData: action.phones,
                loaded: true
            }
        }
        case POSTPHONES: {
            return {
                ...state,
                phonesData: [...state.phonesData, action.phone]
            }
        }
        default:
        return state 
    }
}

export function getPhones(){
    return (dispatch) => {
        axios.get('/api/phones')
            .then(({data}) => {
                dispatch({type: GETPHONES, phones: data})
            })
            .catch(err => console.log(err))
    }
}

export function postPhone(phoneData){
    return (dispatch) => {
         axios.post('/api/phones', phoneData)
            .then(({data}) => {
                dispatch({type: POSTPHONES, phone: data})
            })
            .catch(err => console.log(err))
    }
}