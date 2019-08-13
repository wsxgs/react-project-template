import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import * as store from './mobx'
import App from './App'

import 'normalize.css'
import './../src/style/global.scss'
import * as serviceWorker from './serviceWorker'

// vconsole
import Vconsole from 'vconsole'
import { checkIsMobile } from './tools/validate'
const env = process.env.NODE_ENV
if (checkIsMobile() && env === 'development') {
  window.vconsole = new Vconsole()
}

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
