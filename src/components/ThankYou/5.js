import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'


class ThankYou extends Component {



    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/')


        console.log('btn getting click')


        
    }
    

    render() {
        return (
            <>
                <h1>Feedback!</h1>
                 
                <h3>
                    Thank You!
                </h3>
            <button onClick={this.handleSubmit} className="submitBtn">Leave New Feedback</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(ThankYou);