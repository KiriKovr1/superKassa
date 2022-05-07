import React from "react";
import { useSelector } from "react-redux";

import Title from "../title";
import Input from "./Input";

const ValidError = () => {
    const err = useSelector(s => s.input.sendError)
    return (
        <p className={err ? 'validError' : 'validError--hidden' }>
            длинна номера должна состовлять от 3 до 10 цифр
        </p>
    )
}

const Form = () => {
    return (
        <div className='main__bg'>
            <Title text='Введите номер телефона'/>
            <Input />
            <ValidError />
        </div>
    )
}

export default Form