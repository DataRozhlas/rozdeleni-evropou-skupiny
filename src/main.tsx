import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App id={id} />
  </React.StrictMode>,
)
