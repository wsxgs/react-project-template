import Loadable from 'react-loadable'
import Home from './view/home'
import Loading from './components/loading'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: Loadable({
      loader: () => import('./view/todoList'),
      loading: Loading
    })
  },
  {
    path: '/404',
    component: Loadable({
      loader: () => import('./view/404'),
      loading: Loading
    })
  }
]
