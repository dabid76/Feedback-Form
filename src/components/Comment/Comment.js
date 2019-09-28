import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { stringify } from 'querystring';

class Comments extends Component {

    state = {
        comments: '',
    }

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)
        

            this.setState({
                comments: event.target.value
            })
    }


    handleSubmit = () => {
        // event.preventDefault();

        console.log('btn getting click')
        // if (this.state.comments === ''){
        //     alert('You must fill comments.')
        // } else {
            this.props.history.push('/Review')
            
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        // }
            // this.props.getData()
        
        console.log(this.props.reduxStore.feelingReducer)
        // {JSON.stringify(reviewFeedback)}
            // axios.post('/feedback', this.props.reduxStore.feelingReducer)
            //     .then(response => {
            //         this.props.getData()
            //         console.log('in posted to database', response.data)
            //         // this.props.history.push('/Review')
            //     }).catch(error => {
            //         console.log('error in post to database ', error)
            //     })
            }
    

        
        

    

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <p>
                    Comments?
                </p>
                <div className="comments">
                    <input onChange={(event) => this.handdleInputChange(event, 'number')} />
                    
                </div>

                
            <button onClick={this.handleSubmit} className="nextBtn">Next</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comments);