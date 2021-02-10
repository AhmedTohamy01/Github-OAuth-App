import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from '../src/styles/GlobalStyles'
import { MainContextProvider } from './context/MainContext'

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <GlobalStyles />
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
