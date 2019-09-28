import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
// import Understanding from '../Understanding/Understanding';


class Feeling extends Component {

    state = {
        feelingNumbers: {
            numbers: [1, 2, 3, 4, 5],
        }
    }

    handleSubmit = () => {
        console.log('btn getting click')
        this.props.history.push('/Understanding')
        
        this.props.dispatch({ type: 'FEELINGS', payload: this.props.reduxStore.feelingReducer })
    }

    handdleInputChange = (event, propertyName) => {
        console.log("in handlechange")
        this.setState({
            orderToSend: {
                ...this.state.feelings,
                [propertyName]: event.target.value
            }
        })
    }
    // postNumber = () => {
    //     axios.post('/feedback')
    //         .then(response => {
    //             console.log('in posted to database', response)
    //         }).catch(error => {
    //             console.log('error in post to database ', error)
    //         })
    // }


    render() {
        return (
            <>
            
                <h1>How are you feeling?</h1>
                <p>Feeling?</p>
                <div className="feelings">
                    <input type='number' onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                    
                </div>
                
                 <button onClick={this.handleSubmit} className="nextBtn">NEXT</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Feeling);
