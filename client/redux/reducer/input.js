import axios from "axios"

const SETCODES = 'GETCODES'
const UPDATECOUNTRYCODE = 'UPDATECOUNTRYCODE'
const UPDATEPHONENUMBER = 'UPDATEPHONENUMBER'
const SELECTIONVISIABILITY ='SELECTIONVISIABILITY'
const SENDERROR = 'SENDERROR'

const initialState = {
    loaded: false,
    activeCode: '+7',
    phone: '',
    sendError: false, 
    valid: false ,
    isCountryCodeSelection: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETCODES: {
            return {
                ...state, 
                data: action.codes,
                loaded: true
            }
        } 
        case UPDATECOUNTRYCODE: {
            return {
                ...state, 
                activeCode: action.code
            }
        }
        case SELECTIONVISIABILITY: {
            return {
                ...state, 
                isCountryCodeSelection: !state.isCountryCodeSelection
            }
        }
        case UPDATEPHONENUMBER: {
            const isErr = state.sendError ? !action.validData : false
            return {
                ...state, 
                phone: state.activeCode + action.phone,
                valid: action.validData,
                sendError: isErr
            }
        }
        case SENDERROR: {
            const isErr = state.valid
            return {
                ...state,
                sendError: !isErr
            }
        }
        default:
        return state
    }
}

export function getCodes(){
    return (dispatch) => {
        axios.get('/api/countryCodes')
            .then(({data}) => {
                dispatch({type: SETCODES, codes: data})
            })
    }
}

export function updateCountryCode (data){
    return { type: UPDATECOUNTRYCODE, code: data } 
}

export function updateSelectionVisiability() {
    return { type: SELECTIONVISIABILITY}
}

export function updatePhoneNumber (dataFromInput, validData){
    return { type: UPDATEPHONENUMBER, phone: dataFromInput, validData }
}

export function sendError (){
    return {type: SENDERROR}
}

