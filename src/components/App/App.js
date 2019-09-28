import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';



class App extends Component {

  componentDidMount = () => {
    this.getPizza();
  }
  getPizza = () => {
    axios.get('/feedback')
    .then((response) => {
      this.props.dispatch({type: 'LIST_PIZZAS', payload: response.data})
    }).catch((error) => {
      console.log('this is the error:', error)
    })
  }


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
            <li className="main-nav-li">
              <Link to="/">Feeling</Link>
            </li>
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
