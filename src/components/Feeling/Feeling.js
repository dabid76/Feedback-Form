import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
// import Understanding from '../Understanding/Understanding';


class Feeling extends Component {

    state = {
        feeling: ''
        }
    

    handleSubmit = () => {
        console.log('btn getting click')
        if (this.state.feeling === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/Understanding')
        
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        }
    }

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)
            this.setState({
                feeling: event.target.value})
    }

    render() {
        return (
            <>
            
                <h1>How are you feeling?</h1>
                
                <p>
                    Feeling?
                </p>
                <div className="feelings">
                    <input type="number" min="1" max="5" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                    
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
