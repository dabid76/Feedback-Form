import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/5';



class App extends Component {



  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        {/* <h1>
          How are you feeling?
        </h1> */}

        <ul className="main-nav">
            {/* <li className="main-nav-li">
              <Link to="/">Feeling</Link>
            </li> */}
            {/* <li className="main-nav-li">
              <Link to="/Understanding">Understanding</Link>
            </li>
            <li className="main-nav-li">
              <Link to="/Comment">Comment</Link>
            </li>
            <li className="main-nav-li">
              <Link to="/Support">Support</Link>
            </li> */}
          </ul>
        <Route path="/" exact component={Feeling} />
        <Route path="/Understanding" component={Understanding}/>
        <Route path="/Comment" component={Comment}/>
        <Route path="/Support" component={Support} />
        <Route path="/Review" component={Review} />
        <Route path="/5" component={ThankYou} />

        {/* <Feeling /> */}
        {/* <Understanding /> */}
        {/* <Support /> */}
        {/* <Comment /> */}
        <br/>
      </div>
      </Router>
    );
  }
}

const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
