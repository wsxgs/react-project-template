import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import * as store from './mobx'
import App from './App'
import { checkIsMobile } from './tools/validate'

// service worker
import './serviceWorker'

// 样式重置
import 'normalize.css'
import './../src/style/global.scss'

// vconsole
function addVconsole () {
  return import('vconsole').then(Vconsole => {
    window.vconsole = new Vconsole()
  })
}
const env = process.env.REACT_APP_ENV
if (checkIsMobile() && env !== 'prod') {
  addVconsole()
}

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
