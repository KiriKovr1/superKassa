import React from 'react';
import PhoneRow from './phoneRow';

const EmptyList = () => {
    return (
        <div className='emptyList'>
            <p>
                список пуст
            </p>
        </div>
    )
}

const Phones = (props) => {
    return (
        <div className='columns'>
            {props.phoneData.length !== 0 ? 
               props.phoneData.map((it,index) => {
                   return<PhoneRow 
                        phone={it.phone} 
                        date={it.adddate} 
                        key={`PhoneRow${index}`}  
                        />
               }) : 
               <EmptyList />
            }
        </div>
    )
}

export default Phones