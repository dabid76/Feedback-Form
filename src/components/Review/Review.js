import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class Comment extends Component {

    state = {
        reviewFeedBack: []
    }

    componentDidMount = () => {
        this.getData();
    }
    getData = () => {
        axios.get('/feedback')
            .then(response => {
                this.setState({
                    reviewFeedBack: response.data
                })
                console.log('in get to database', response)
            }).catch(error => {
                console.log('error in get to database ', error)
            })
        }

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log('btn getting click')

    //     axios.post('/feedback', this.props.reduxStore.feelingReducer)
    //         .then(response => {
    //             // this.props.getPizza()
    //             console.log('in posted to database', response)
    //         }).catch(error => {
    //             console.log('error in post to database ', error)
    //         })
    // }
    

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>

                {/* <ul> */}
                {this.state.reviewFeedBack.map((data) => (
                    <ul>
                    <li>Feeling: {data.feeling}</li>
                    <li>Understanding: {data.understanding}</li>
                    <li>Support: {data.support}</li>
                    <li>Comment: {data.comments}</li>
                    </ul>
                )
            )}
                {/* </ul>                 */}
            
            <button onClick={this.handleSubmit} className="submitBtn">Submit</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comment);