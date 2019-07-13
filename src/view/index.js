import React, { Component } from 'react';
import './app.sass';
const Logo = './logo.svg';
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <img className="App-logo" src={Logo} alt="" />
        <h3 className="App-link">React.js</h3>
      </div>
    );
  }
}
