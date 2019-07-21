import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTaskAction,
  deleteTaskAction,
  finishTaskAction,
  toggleLoadingAction
} from '../../redux/action';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.sass';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.toggleLoadingAction(false);
    }, 500);
  }

  /**
   * 添加任务
   */
  addTask() {
    let input = this.refs.taskInput;
    let value = input.value;
    if (value === '') {
      alert('请输入任务');
      return;
    }

    this.props.addTaskAction(value);
    input.value = '';
  }

  finishTask(id) {
    console.log('完成');
    this.props.finishTaskAction(id);
  }

  deleteTask(id) {
    console.log('删除');
    this.props.deleteTaskAction(id);
  }

  render() {
    let { todoList } = this.props;
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
              {todoList &&
                todoList.map((item, index) => {
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
                                this.finishTask(item.id);
                              }}
                            >
                              完成
                            </span>
                          )}

                          <span
                            className="delete"
                            onClick={() => {
                              this.deleteTask(item.id);
                            }}
                          >
                            删除
                          </span>
                        </div>
                      </li>
                    </CSSTransition>
                  );
                })}
            </TransitionGroup>
          </ul>

          {todoList.length === 0 && (
            <div className="tips">还没有添加任务，快来添加吧~</div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.taskState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTaskAction: params => {
      dispatch(addTaskAction(params));
    },
    deleteTaskAction: params => {
      dispatch(deleteTaskAction(params));
    },
    finishTaskAction: params => {
      dispatch(finishTaskAction(params));
    },
    toggleLoadingAction: status => {
      dispatch(toggleLoadingAction(status));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
