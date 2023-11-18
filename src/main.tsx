import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ArrowBack from './components/arrowBack/ArrowBack'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ArrowBack />
  </React.StrictMode>,
)
