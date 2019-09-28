import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class Review extends Component {

    state = {
        reviewFeedBack: []
    }

    componentDidMount = () => {
        this.getData();
    }
    getData = () => {
        axios.get('/feedback', this.props.reduxStore.feelingReducer)
            .then(response => {
                this.setState({
                    reviewFeedBack: response.data
                })
                console.log('in get to database', response.data)
            }).catch(error => {
                console.log('error in get to database ', error)
            })
        }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('btn getting click')
        this.props.history.push('/5')


        axios.post('/feedback', this.props.reduxStore.feelingReducer)
            .then(response => {
                // this.props.getPizza()
                console.log('in posted to database', response.data)
            }).catch(error => {
                console.log('error in post to database ', error)
            })

        
    }
    

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                    <div>
                        Feelings: {this.props.reduxStore.feelingReducer.feeling}
                       <br></br>
                       <br></br>
                        Understanding: {this.props.reduxStore.feelingReducer.understanding}
                       <br></br>
                       <br></br>
                        Support: {this.props.reduxStore.feelingReducer.support}
                       <br></br>
                        <br></br>
                         Comments: {this.props.reduxStore.feelingReducer.comments}
                    </div>
                    <br/>
                    <br/>
            
            <button onClick={this.handleSubmit} className="submitBtn">Submit</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Review);