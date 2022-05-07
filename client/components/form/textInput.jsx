import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { updatePhoneNumber, sendError} from "../../redux/reducer/input"


const phoneValidation = (str) => {
    const re = /^\d{3,10}$/gm
    const valid = re.test(str)
    return valid
}


const TextInput = () => {
    const [phonebody, setPhoneBody] = useState('') 
    const dispatch = useDispatch()
    return (
        <input 
            type="text" 
            value={phonebody}
            onBlur={() => {
                dispatch(sendError())
            }}
            onChange={(e) => {
                const value = e.target.value
                setPhoneBody(value)
                dispatch(updatePhoneNumber(value, phoneValidation(value)))
            }}
        />
    )
}

export default TextInput