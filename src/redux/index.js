import { combineReducers, createStore } from 'redux';
import taskReducer from './reductor';

let reductor = combineReducers({ taskReducer });
export let store = createStore(reductor);
