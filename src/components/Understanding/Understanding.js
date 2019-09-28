import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import Support from '../Support/Support';


class Understanding extends Component {

    
    handleSubmit = () => {
        console.log('btn getting click')
        this.props.history.push('/support')
        // this.props.dispatch({ type: 'FEELINGS', payload: this.state.feelingNumbers })
    }



    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <p>
                    Understanding?
                </p>
                <div className="understanding">
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
export default connect(mapStateToProps)(Understanding);
