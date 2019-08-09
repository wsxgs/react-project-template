import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class cs extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>404</h1>
        <p>您访问的页面不存在</p>
        <Link to="/">返回首页</Link>
      </div>
    )
  }
}
