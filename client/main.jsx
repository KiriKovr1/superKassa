import React from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/styles.scss'

import Root from './config/Root'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<Root />)