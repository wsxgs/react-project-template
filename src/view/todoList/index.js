import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTaskAction,
  deleteTaskAction,
  finishTaskAction
} from '../../redux/action';
import './todoList.sass';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  /**
   * 添加任务
   */
  addTask() {
    let input = this.refs.taskInput;
    let value = input.value;

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
          <input type="text" ref="taskInput" />
          <button onClick={this.addTask.bind(this)}>添加</button>
        </div>
        <div className="task-list">
          <h3 className="title">我的任务</h3>
          <ul>
            {todoList &&
              todoList.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={item.status === 1 ? 'finished' : ''}
                  >
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
                );
              })}
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
    todoList: state.taskReducer
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
