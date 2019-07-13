import Home from './view/home';
import Todo from './view/todoList';
// import NotFound from './view/NotFound';

export let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: Todo
  }
];
