import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        {/* <h1>
          How are you feeling?
        </h1> */}
        <Feeling />
        <br/>
      </div>
    );
  }
}

const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
