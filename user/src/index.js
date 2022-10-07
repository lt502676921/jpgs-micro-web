import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
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
  console.log('user bootstrap')
}

export const mount = () => {
  window.custom.emit('test', { a: 1 })
  window.a = 1
  render()
  console.log('mount')
}

export const unmount = () => {
  console.log('unmount')
}
