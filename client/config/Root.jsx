import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux/index'  

import MainPage from '../components/mainPage'


const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="*" element={<h3>404</h3>}/>
                </Routes>
            </BrowserRouter>
        </ Provider>
    )
}

export default Root