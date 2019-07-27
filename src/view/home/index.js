import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLoadingAction } from '../../redux/action';
// import request from './../../tools/request';
import './index.sass';
const Logo = './logo.svg';
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // 测试ajax
    this.sendRequest();
    setTimeout(() => {
      this.props.toggleLoadingAction(false);
    }, 500);
  }

  async sendRequest() {
    // let res = await request.post('/api', { id: 'ceshi ' });
  }

  render() {
    return (
      <div className="home">
        <img className="App-logo" src={Logo} alt="" />
        <h3 className="App-link">React.js</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
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
)(Home);
