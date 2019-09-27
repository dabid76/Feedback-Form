import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Comment extends Component {

    
    handleSubmit = () => {
        console.log('btn getting click')
        // this.props.history.push('/checkout')
        // this.props.dispatch({ type: 'FEELINGS', payload: this.state.feelingNumbers })
    }



    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <p>
                    Comments?
                </p>

                
            <button onClick={this.handleSubmit} className="nextBtn">NEXT</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comment);