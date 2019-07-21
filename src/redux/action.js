/**
 * 生成显示隐藏ACTION
 * @param {*} status
 */
export function toggleLoadingAction(status) {
  return {
    type: 'TOGGLE-lOADING-ACTION',
    status: status
  };
}

/**
 * 生成添加任务ACTION
 * @param {*} text
 */
export function addTaskAction(text) {
  return {
    type: 'ADD-TASK-ACTION',
    text: text
  };
}

/**
 * 生成完成任务ACTION
 * @param {*} id
 */
export function finishTaskAction(id) {
  return {
    type: 'FINISH-TASK-ACTION',
    id: id
  };
}

/**
 * 生成删除任务ACTION
 * @param {*} id
 */
export function deleteTaskAction(id) {
  return {
    type: 'DELETE-TASK-ACTION',
    id: id
  };
}
