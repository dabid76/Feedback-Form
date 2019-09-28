import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
// import Support from '../Support/Support';


class Understanding extends Component {

    state= {
        understanding: '',
    }
    
    handleSubmit = () => {
        console.log('btn getting click')
        if (this.state.understanding === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/support')
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        }
    }

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)

        this.setState({
            understanding: event.target.value})
}



    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <p>
                    Understanding?
                </p>
                <div className="understanding">
                    <input type='number' min="1" max="5" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                    
                </div>

                
            <button onClick={this.handleSubmit} className="nextBtn">NEXT</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Understanding);
