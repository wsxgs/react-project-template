import { combineReducers, createStore } from 'redux';
import { taskState, loadingState } from './reductor';

let reductor = combineReducers({ taskState, loadingState });
export let store = createStore(reductor);
