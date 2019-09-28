import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Comment extends Component {



    state = {
        dataFeeling: {
            feelings: [],
            understanding:[],
            support: [],
            comments: '',
        }
    }

    handleSubmit = (event) => {

        // const feeling = this.props.reduxStore.feelingReducer.feeling
        // const understanding = this.props.reduxStore.feelingReducer.understanding
        // const support = this.props.reduxStore.feelingReducer.support
        // const comment = this.props.reduxStore.feelingReducer.comments

        // const dataFeeling = {
        //     feeling: feeling.feeling,
        //     understanding: understanding.understanding,
        //     support: support.support,
        //     comments: comment.comments
        // }




        // event.preventDefault();
        console.log('btn getting click')
        // this.props.history.push('/comment')
        // this.props.dispatch({ type: 'FEELINGS', payload: this.props.reduxStore.feelingReducer })
        axios.post('/feedback', this.state.dataFeeling)
            .then(response => {
                // this.props.getPizza()
                console.log('in posted to database', response)
            }).catch(error => {
                console.log('error in post to database ', error)
            })
    }
    


    handdleInputChange = (event, propertyName) => {
        console.log("in handlechange")
        // this.setState({
        //     numbers: {
        //         ...this.state.numbers,
        //         [propertyName]: event.target.value
        //     }
        // })
    }
    // postNumber = () => {




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

                
            <button onClick={this.handleSubmit} className="submitBtn">Submit</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comment);