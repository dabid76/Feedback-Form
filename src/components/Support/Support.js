import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
// import Comment from '../Comment/Comment';


class Support extends Component {

    
    handleSubmit = () => {
        console.log('btn getting click')
        this.props.history.push('/comment')
        this.props.dispatch({ type: 'FEELINGS', payload: this.props.reduxStore.feelingReducer })
    }

    handdleInputChange = (event, propertyName) => {
        console.log("in handlechange")
        this.setState({
            orderToSend: {
                ...this.props.feelings,
                [propertyName]: event.target.value
            }
        })
    }



    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <p>
                    Support?
                </p>
                <div className="support">
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
export default connect(mapStateToProps)(Support);
