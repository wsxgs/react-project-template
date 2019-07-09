import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.sass';

export default class cs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="tabbar">
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/todo">选项1</Link>
          </li>
        </ul>
      </div>
    );
  }
}
