import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Feeling extends Component {

    state = {
        feelingNumbers: {
            numbers: '',
        }
    }

    handleSubmit = () => {
        console.log('btn getting click')
        // this.props.history.push('/checkout')
        this.props.dispatch({ type: 'FEELINGS', payload: this.state.feelingNumbers })
    }

    handdleInputChange = (event, propertyName) => {
        console.log("in handlechange")
        this.setState({
            orderToSend: {
                ...this.state.orderToSend,
                [propertyName]: event.target.value
            }
        })
        axios.post('/feedback')
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log('error in order form post ', error)
            })
    }


    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <p>Feeling?</p>
                <div className="feelings">
                    <input type='number' pattern="[0-5]" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
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
