import { combineReducers, createStore } from 'redux';
import { taskReducer, loadingReducer } from './reductor';

let reductor = combineReducers({ taskReducer, loadingReducer });
export let store = createStore(reductor);
