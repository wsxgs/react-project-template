import React, { Component } from 'react'
import './index.sass'

class Loading extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div className="loading">
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    )
  }
}

export default Loading
