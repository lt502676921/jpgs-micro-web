import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicLayout from './router'
import reportWebVitals from './reportWebVitals'
import { setMain } from './utils/main'
import './index.css'

const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <BasicLayout />
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

if (!window.__MICRO_WEB__) {
  console.log('子应用render')
  render()
}

export const bootstrap = () => {
  console.log('product bootstrap')
}

export const mount = app => {
  setMain(app)
  window.a = 2
  render()
  console.log('mount')
}

export const unmount = () => {
  console.log('unmount')
}
