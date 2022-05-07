import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSelectionVisiability } from '../../redux/reducer/input'
import CountryCodeSelection from './countryCodeSelection'
import arrow from '../../assets/icons/button-arrow.svg'
import TextInput from './textInput'

const SaveButton = (props) => {
    let count = 0
    return (
        <button
            disabled={props.dis}
            className={props.dis ? 'input__SaveButton--disabled':'input__SaveButton'}
            onClick={() => {
                count += 1
                console.log(count)
            }}
        >
            {props.text}
        </button>  
    )
}

const CountryCodeButton = (props) => {
    const dispatch = useDispatch()
    return ( 
        <button
                className='input__countryCodeButton'
                onClick={() => dispatch(updateSelectionVisiability()) }
            >
                <span>
                    <p className='countryCodeButton__text'>
                        {props.code}
                    </p>
                    <img 
                        src={arrow} 
                        alt="arrow"
                        className={ props.active ? 
                            'countryCodeButton__arrow--directionRight' : 
                            'countryCodeButton__arrow--directionDown'
                        } 
                    />
                </span>
            </button>
    )
}

const Input = () => {
    const inputData = useSelector(s => s.input)
    return (
        <div 
            className={inputData.sendError ? 'input--notValid' : 'input'} 
        >
            <CountryCodeButton code={inputData.activeCode} active={inputData.isCountryCodeSelection}/> 
            <TextInput />
            <SaveButton text='сохранить' dis={!inputData.valid}/>
            {inputData.isCountryCodeSelection ? <CountryCodeSelection/> : undefined}
        </div>
    )
}


export default Input