import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Comment extends Component {

    state = {
        comments: '',
    }

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)

            this.setState({
             comments: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('btn getting click')
        // if (this.state.comments === ''){
        //     alert('You must fill comments.')
        //  {
        this.props.history.push('/Review')
        
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        this.props.postData()
        // }
    
    
            // axios.post('/feedback', this.props.reduxStore.feelingReducer)
            //     .then(response => {
            //         this.props.getData()
            //         console.log('in posted to database', response)
            //     }).catch(error => {
            //         console.log('error in post to database ', error)
            //     })
    }

        

    

    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <p>
                    Comments?
                </p>
                <div className="comments">
                    <input  onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                    
                </div>

                
            <button onClick={this.handleSubmit} className="nextBtn">Next</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comment);