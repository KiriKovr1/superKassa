import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserList from '../components/userList/userListPage.jsx'


const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserList />}/>
                <Route path="/test" element={<div> this is test</div>}/>
                <Route path="*" element={<h3>404</h3>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root