import React , {useState}from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


const PhoneRow = (props) => {
    return (
        <CopyToClipboard text={props.phone}>
            <div 
                className='phoneRow'
                onMouseOver={() => {

                }}
            >
                <div>
                    <p className='phoneText'>{props.phone}</p>
                </div>
                <div>
                    <p className='dateText'>{props.date}</p>
                </div>
            </div>
        </CopyToClipboard>
    )
}

export default PhoneRow