import axios from "axios"

const SET_CODES = 'SET_CODES'
const UPDATE_COUNTRY_CODE = 'UPDATE_COUNTRY_CODE'
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER'
const SELECTION_VISIABILITY = 'SELECTION_VISIABILITY'
const SEND_ERROR = 'SEND_ERROR'
const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE'

const initialState = {
    loaded: false,
    activeCode: '+7',
    inputValue: '',
    phone: '',
    sendError: false,
    valid: false,
    isCountryCodeSelection: false,
    serverError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CODES: {
            return {
                ...state,
                data: action.codes,
                loaded: true
            }
        }
        case UPDATE_COUNTRY_CODE: {
            return {
                ...state,
                activeCode: action.code,
                phone: action.code + state.inputValue

            }
        }
        case SELECTION_VISIABILITY: {
            return {
                ...state,
                isCountryCodeSelection: !state.isCountryCodeSelection
            }
        }
        case UPDATE_PHONE_NUMBER: {
            const isErr = state.sendError ? !action.validData : false
            return {
                ...state,
                inputValue: action.phone,
                phone: state.activeCode + action.phone,
                valid: action.validData,
                sendError: isErr
            }
        }
        case SEND_ERROR: {
            const isErr = state.valid
            return {
                ...state,
                sendError: !isErr
            }
        }
        case RESET_INPUT_VALUE: {
            return {
                ...state,
                inputValue: '',
                valid: false,
                sendError: false
            }
        }
        default:
            return state
    }
}

export function getCodes() {
    return (dispatch) => {
        axios.get('/api/countryCodes')
            .then(({data}) => {
                dispatch({ type: SET_CODES, codes: data })
            })
            .catch(err => console.log(err))
    }
}

export function updateCountryCode(data) {
    return { type: UPDATE_COUNTRY_CODE, code: data }
}

export function updateSelectionVisiability() {
    return { type: SELECTION_VISIABILITY }
}

export function updatePhoneNumber(dataFromInput, validData) {
    return { type: UPDATE_PHONE_NUMBER, phone: dataFromInput, validData }
}

export function sendError() {
    return { type: SEND_ERROR }
}

export function resetInputValue() {
    return { type: RESET_INPUT_VALUE }
}

