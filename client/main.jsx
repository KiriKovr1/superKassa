import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/styles.scss'

import Root from './config/Root'

const target = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(<Component/>, target)
}

render(Root)