import React from 'react'
import Title from './title'

const Error = (props) => {
    return (
        <div className='Error'>
            <Title text={props.errorBody.error}/> 
            <p>{props.errorBody.messege}</p>
            <button
                onClick={() => window.location.reload()}
            >
                перезагрузить
            </button>
        </div>
    )
}

export default Error