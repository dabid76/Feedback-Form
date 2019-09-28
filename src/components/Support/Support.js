import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
// import Comment from '../Comment/Comment';


class Support extends Component {

    state = {
        support: '',
    }
    
    handleSubmit = () => {
        console.log('btn getting click')
        if (this.state.support === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/comment')
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support  })
        }
    }

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)

        this.setState({
            support: event.target.value})
}



    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <p>
                    Support?
                </p>
                <div className="support">
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
export default connect(mapStateToProps)(Support);
