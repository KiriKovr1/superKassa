import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatePhoneNumber, sendError} from "../../redux/reducer/input"


const phoneValidation = (str) => {
    const re = /^\d{3,10}$/gm
    const valid = re.test(str)
    return valid
}


const TextInput = () => {
    const inputValue = useSelector(s => s.input.inputValue)
    const dispatch = useDispatch()
    return (
        <input 
            type="text" 
            value={inputValue}
            onBlur={() => {
                dispatch(sendError())
            }}
            onChange={(e) => {
                const value = e.target.value
                dispatch(updatePhoneNumber(value, phoneValidation(value)))
            }}
        />
    )
}

export default TextInput