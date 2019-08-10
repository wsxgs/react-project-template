import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'

@inject('loadingStore', 'taskStore')
@observer
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.loadingStore.toggleLoadingStatus(false)
    }, 500)
  }

  /**
   * 添加任务
   */
  addTask () {
    const input = this.refs.taskInput
    const value = input.value
    if (value === '') {
      alert('请输入任务')
      return
    }

    this.props.taskStore.addTask(value)
    input.value = ''
  }

  finishTask (id) {
    console.log('完成')
    this.props.taskStore.finishTask(id)
  }

  deleteTask (id) {
    console.log('删除')
    this.props.taskStore.deleteTask(id)
  }

  render () {
    const { taskList } = this.props.taskStore
    return (
      <div className="todo container">
        <div className="add-task">
          <input type="text" ref="taskInput" placeholder="请输入任务" />
          <button onClick={this.addTask.bind(this)}>添加</button>
        </div>
        <div className="task-list">
          <h3 className="title">我的任务</h3>
          <ul>
            <TransitionGroup>
              {taskList &&
                taskList.map((item, index) => {
                  return (
                    <CSSTransition
                      key={item.id}
                      className={item.status === 1 ? 'finished' : ''}
                      timeout={500}
                    >
                      <li>
                        <div className="content">
                          <span>{index + 1}.</span>
                          {item.text}
                        </div>
                        <div className="action">
                          {item.status !== 1 && (
                            <span
                              className="success"
                              onClick={() => {
                                this.finishTask(item.id)
                              }}
                            >
                              完成
                            </span>
                          )}

                          <span
                            className="delete"
                            onClick={() => {
                              this.deleteTask(item.id)
                            }}
                          >
                            删除
                          </span>
                        </div>
                      </li>
                    </CSSTransition>
                  )
                })}
            </TransitionGroup>
          </ul>

          {taskList.length === 0 && (
            <div className="tips">还没有添加任务，快来添加吧~</div>
          )}
        </div>
      </div>
    )
  }
}

export default TodoList
