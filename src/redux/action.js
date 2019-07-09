/**
 * 生成添加任务ACTION
 * @param {*} payload
 */
export function addTaskAction(text) {
  return {
    type: 'ADD-TASK-ACTION',
    text: text
  };
}

/**
 * 生成完成任务ACTION
 * @param {*} payload
 */
export function finishTaskAction(id) {
  return {
    type: 'FINISH-TASK-ACTION',
    id: id
  };
}

/**
 * 生成删除任务ACTION
 * @param {*} payload
 */
export function deleteTaskAction(id) {
  return {
    type: 'DELETE-TASK-ACTION',
    id: id
  };
}
