import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import './index.scss'
@inject('loadingStore')
@observer
class NotFound extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    this.props.loadingStore.toggleLoadingStatus(false)
  }

  render () {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>您访问的页面不存在</p>
        <Link to="/">返回首页</Link>
      </div>
    )
  }
}

export default NotFound
