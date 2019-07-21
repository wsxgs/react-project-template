import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from './routers';
import { toggleLoadingAction } from './redux/action';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Tabbar from './components/tabbar';
import Loading from './components/loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    let { pathname } = this.props.location;
    let nextPathname = nextProps.location.pathname;

    if (pathname !== nextPathname) {
      this.props.toggleLoadingAction(true);
    }
  }

  componentDidMount() {}

  render() {
    let { location } = this.props;
    return (
      <div>
        <Tabbar />
        <CSSTransition
          in={this.props.isShowLoading}
          classNames="fades"
          timeout={300}
        >
          <div>{this.props.isShowLoading && <Loading />}</div>
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
    );
  }
}

let newApp = withRouter(App);

function mapStateToProps(state) {
  return {
    isShowLoading: state.loadingState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLoadingAction: status => {
      dispatch(toggleLoadingAction(status));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newApp);
