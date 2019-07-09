import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routers';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';

import 'normalize.css';
import './../src/style/global.sass';
import Tabbar from './components/tabbar/index';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Tabbar />
      {routes.map((route, i) => (
        <Route key={i} {...route} exact />
      ))}
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
