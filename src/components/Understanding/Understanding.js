import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
// import Support from '../Support/Support';

class Understanding extends Component {

    state= {
        understanding: '',
    } // end state
    
    handleSubmit = () => {
        console.log('btn getting click')
        if (this.state.understanding === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/support')
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        } // end if statement
    } // end handleSubmit

    handleBack = () => {
        console.log('btn getting click')
        this.props.history.push('/')
    } // end handleBack

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)
        this.setState({
            understanding: event.target.value})
    } // end handdleInputChange

    render() {
        return (
            <>
                <h3>How well are you understanding the content?</h3>
                    <p>
                        Understanding?
                    </p>
                        <div className="understanding">
                            <input type='number' min="1" max="5" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                        </div>
                    <button onClick={this.handleBack} className="backBtn">BACK</button>
                    <button onClick={this.handleSubmit} className="nextBtn">NEXT</button>
            </>
        ); // end return
    } // end render
} // end Understanding component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Understanding);
