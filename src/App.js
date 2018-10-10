import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { testAction } from './redux/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.testAction({ test: "hello" });
  }
  render() {
    console.log('test reducer : ', this.props.test)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.testReducer.test
  }
}

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  testAction
}, dispatch);

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
