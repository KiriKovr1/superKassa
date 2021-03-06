import axios from "axios"
import {  WSpostPhone, WSdeletePhone } from "../../config/ws.js";

const GET_PHONES = 'GET_PHONES'
const POST_PHONES = 'POST_PHONES'
const REMOVE_PHONE = 'REMOVE_PHONE'
const SERVER_ERROR = 'SERVER_ERROR'

const initialState = {
    loaded: false,
    serverError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONES: {
            return {
                ...state,
                phonesData: action.data,
                loaded: true
            }
        }
        case POST_PHONES: {
            return {
                ...state,
                phonesData: [...state.phonesData, action.data]
            }
        }
        case REMOVE_PHONE: {
            return {
                ...state,
                phonesData: state.phonesData.filter(it => it.id !== action.data)
            }
        }
        case SERVER_ERROR: {
            return {
                ...state,
                serverError: true,
                errorBody: action.errorBody
            }
        }
        default:
            return state
    }
}

export function getPhones() {
    return (dispatch) => {
        axios.get('/api/phones')
            .then(({ data }) => {
                if (data.isError) {
                    dispatch({ type: SERVER_ERROR, errorBody: data })
                }
                dispatch({ type: GET_PHONES, data })
            })
            .catch(err => console.log(err))
    }
}

export function postPhone(phoneData) {
    return (dispatch) => {
        axios.post('/api/phones', phoneData)
            .then(({ data }) => {
                if (data.isError) {
                    dispatch({ type: SERVER_ERROR, errorBody: data })
                }
                WSpostPhone(data)
                dispatch({ type: POST_PHONES, data})
            })
            .catch(err => console.log(err))
    }
}

export function deletePhone(phoneId) {
    return (dispatch) => {
        axios.delete(`/api/phones/${phoneId}`)
            .then(({ data }) => {
                if (data.isError) {
                    dispatch({ type: SERVER_ERROR, errorBody: data })
                }
                WSdeletePhone(phoneId)
                dispatch({ type: REMOVE_PHONE, data: phoneId })
            })
    }
}