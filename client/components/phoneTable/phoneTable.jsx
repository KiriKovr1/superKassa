import React, { useMemo }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../loader'
import Phones from './phones'
import { getPhones } from '../../redux/reducer/table'

import Title from '../title'

const ColumnNames = () => {
    return (
        <div className='columnNames'>
            <div className='column'>
                <p>
                    номер телефона
                </p>
            </div>
            <div className='columnDivider'></div>
            <div className='column'>
                <p>
                    дата добавления
                </p>
            </div>
        </div>
    )
}

const PhoneTable = () => {
    const phones = useSelector(s => s.table)
    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(getPhones())
    },[])

    return (
        <div className='main__bg'>
            <Title text='список номеров'/>
            <ColumnNames />
            {!phones.loaded ? 
                <Loader/> : <Phones phoneData={phones.phonesData} />
            }
        </div>
    )
}

export default PhoneTable