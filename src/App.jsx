import React from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import {CounterProvider} from './contexts/counterContext'

const App = () => {
  return (
    <CounterProvider>
        <HomePage/>
    </CounterProvider>
  )
}

export default App
