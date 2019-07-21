import { setStore, getStore } from './../tools/store';

/**
 * rodoList
 * @param {*} state
 * @param {*} action
 */
export function taskState(state = getStore('TO-DO-LIST') || [], action) {
  let newState = [];
  switch (action.type) {
    // 添加任务
    case 'ADD-TASK-ACTION':
      newState = [
        ...state,
        {
          id: state.length,
          status: 0,
          text: action.text
        }
      ];
      setStore('TO-DO-LIST', newState);
      return newState;

    // 修改状态
    case 'FINISH-TASK-ACTION':
      newState = [...state];
      let finishIndex = state.findIndex(item => item.id === action.id);
      let finishTask = newState[finishIndex];
      finishTask.status = 1;
      newState.splice(finishIndex, 1);
      newState.push(finishTask);
      setStore('TO-DO-LIST', newState);
      return newState;

    // 删除任务
    case 'DELETE-TASK-ACTION':
      newState = [...state];
      let deleteIndex = state.findIndex(item => item.id === action.id);
      newState.splice(deleteIndex, 1);
      setStore('TO-DO-LIST', newState);
      return newState;

    default:
      return state;
  }
}

/**
 * 加载中
 * @param {*} state
 * @param {*} action
 */
export function loadingState(state = false, action) {
  switch (action.type) {
    case 'TOGGLE-lOADING-ACTION':
      return action.status;
    default:
      return true;
  }
}
