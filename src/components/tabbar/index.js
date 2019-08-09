import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.sass'

export default class Tabbar extends Component {
  constructor () {
    super()
    this.state = {
      // 选中项项卡index
      activeIndex: 0
    }
    this.navList = [
      {
        name: '首页',
        href: '/'
      },
      {
        name: 'todoList',
        href: '/todo'
      }
    ]
  }

  componentWillMount () {
    const path = window.location.pathname
    const index = this.navList.findIndex(item => item.href === path)
    console.log(index)
    this.setState({
      activeIndex: index === -1 ? 0 : index
    })
  }

  /**
   * 切换选项卡
   * @param {Number} index
   */
  toggleNav (index) {
    if (index === this.state.activeIndex) {
      return
    }
    this.setState({
      activeIndex: index
    })
  }

  render () {
    const { activeIndex } = this.state
    return (
      <div className="tabbar">
        <ul>
          {this.navList.map((item, index) => {
            return (
              <li
                key={index}
                className={index === activeIndex ? 'active' : ''}
                onClick={this.toggleNav.bind(this, index)}
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
