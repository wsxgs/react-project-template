import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import * as store from './mobx'
import App from './App'

// service worker
import './serviceWorker'

import 'normalize.css'
import './../src/style/global.scss'

// vconsole
import Vconsole from 'vconsole'
import { checkIsMobile } from './tools/validate'

const env = process.env.REACT_APP_ENV
if (checkIsMobile() && env !== 'prod') {
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
