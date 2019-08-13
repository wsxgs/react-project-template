import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import request from './../../tools/request'
import './index.scss'
const Logo = './logo.svg'

@inject('loadingStore')
@observer
class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props)
    // 测试ajax
    this.sendRequest()
    setTimeout(() => {
      this.props.loadingStore.toggleLoadingStatus(false)
    }, 500)
  }

  async sendRequest () {
    await request.post('/api', { id: 'ceshi' })
  }

  render () {
    return (
      <div className="home">
        <img className="App-logo" src={Logo} alt="" />
        <h3 className="App-link">React.js</h3>
      </div>
    )
  }
}

export default Home
