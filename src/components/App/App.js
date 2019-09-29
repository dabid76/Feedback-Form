import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/5';
import admin from '../admin/admin';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

          <Route path="/" exact component={Feeling} />
          <Route path="/Understanding" component={Understanding}/>
          <Route path="/Comment" component={Comment}/>
          <Route path="/Support" component={Support} />
          <Route path="/Review" component={Review} />
          <Route path="/5" component={ThankYou} />
          <Route path="/admin" component={admin} />

        <br/>
      </div>
      </Router>
    ); // end return
  } // end render
} // end App component

const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
