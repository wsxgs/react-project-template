import App from './view/home';
import Todo from './view/todoList';
// import NotFound from './view/NotFound';

export let routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/todo',
    component: Todo
  }
];
