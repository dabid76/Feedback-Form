import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {HashRouter as Link} from 'react-router-dom';

class Review extends Component {

    state = {
        reviewFeedBack: []
    } // end state

    componentDidMount = () => {
        this.getData();
    } // end componentDidMount

    getData = () => {
        axios.get('/feedback', this.props.reduxStore.feelingReducer)
            .then(response => {
                this.setState({
                    reviewFeedBack: response.data
                })
                console.log('in get to database', response.data)
            }).catch(error => {
                console.log('error in get to database ', error)
            }) // end axios GET
    } // end getData

    handleBack = () => {
        console.log('btn getting click')
        this.props.history.push('/comment')
    } // end handleBack

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('btn getting click')
        this.props.history.push('/5')

        axios.post('/feedback', this.props.reduxStore.feelingReducer)
            .then(response => {
                console.log('in posted to database', response.data)
            }).catch(error => {
                console.log('error in post to database ', error)
            }) // end axios POST
    } // end handleSubmit

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                    <div>   
                        <Link to="/" className="main-nav">Feelings</Link>: {this.props.reduxStore.feelingReducer.feeling}
                        <br></br>
                        <br></br>
                        <Link to="/Understanding" className="main-nav">Understanding</Link>: {this.props.reduxStore.feelingReducer.understanding}
                        <br></br>
                        <br></br>
                        <Link to="/support" className="main-nav">Support</Link>: {this.props.reduxStore.feelingReducer.support}
                        <br></br>
                        <br></br>
                        <Link to="/comment" className="main-nav">Comments</Link>: {this.props.reduxStore.feelingReducer.comments}
                    </div>
                        <br/>
                        <br/>
                    <button onClick={this.handleSubmit} className="submitBtn">Submit</button>
            </>
        ); // end return
    } // end render
} // end Review component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Review);