import { observable, action } from 'mobx'
import { setStore, getStore } from './../tools/store'

class LoadingStore {
  @observable isShowLoading = true;

  @action.bound
  toggleLoadingStatus (state) {
    this.isShowLoading = state
  }
}

export const loadingStore = new LoadingStore()

class TaskStore {
  @observable taskList = getStore('TO-DO-LIST') || [];

  @action.bound
  addTask (text) {
    this.taskList = [
      ...this.taskList,
      {
        id: this.taskList.length,
        status: 0,
        text: text
      }
    ]
    setStore('TO-DO-LIST', this.taskList)
  }

  @action.bound
  finishTask (id) {
    const finishIndex = this.taskList.findIndex(item => item.id === id)
    const finishTask = this.taskList[finishIndex]
    finishTask.status = 1
    this.taskList.splice(finishIndex, 1)
    this.taskList.push(finishTask)
    setStore('TO-DO-LIST', this.taskList)
  }

  @action.bound
  deleteTask (id) {
    const deleteIndex = this.taskList.findIndex(item => item.id === id)
    this.taskList.splice(deleteIndex, 1)
    setStore('TO-DO-LIST', this.taskList)
  }
}

export const taskStore = new TaskStore()
