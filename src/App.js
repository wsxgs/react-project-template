import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { routes } from './routers'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Tabbar from './components/tabbar'
import Loading from './components/loading'

@inject('loadingStore')
@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const { pathname } = this.props.location
    const nextPathname = nextProps.location.pathname

    if (pathname !== nextPathname) {
      this.props.loadingStore.toggleLoadingStatus(true)
    }
  }

  componentDidMount () {}

  render () {
    const { location, loadingStore } = this.props
    return (
      <div>
        <Tabbar />
        <CSSTransition
          in={loadingStore.isShowLoading}
          classNames="fades"
          timeout={300}
        >
          <div className="loading-wrap">
            {loadingStore.isShowLoading && <Loading />}
          </div>
        </CSSTransition>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fades" timeout={300}>
            <Switch location={location}>
              {routes.map((route, i) => (
                <Route key={i} {...route} exact />
              ))}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)
