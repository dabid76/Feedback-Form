import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

class Comments extends Component {

    state = {
        comments: '',
    } // end state

    handdleInputChange = (event) => {
        console.log('handleChange', event.target.value)
            this.setState({
                comments: event.target.value
            }) // end setState
    } // end handdleInputChange

    handleBack = () => {
        console.log('btn getting click')
        this.props.history.push('/support')
    } // end handleBack

    handleSubmit = () => {
        console.log('btn getting click')
            this.props.history.push('/Review')
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        console.log(this.props.reduxStore.feelingReducer)
    } // end handleSubmit
 
    render() {
        return (
            <>
                <h3>Any comments you want to leave?</h3>
                    <p>
                        Comments?
                    </p>
                        <div className="comments">
                            <input onChange={(event) => this.handdleInputChange(event, 'number')} />
                        </div>
                        <IconButton onClick={()=>this.handleBack()} className={useStyles.button}>
                        Back
                        </IconButton>

                        <IconButton onClick={()=>this.handleSubmit()} className={useStyles.button}>
                        Next
                        </IconButton>
                    {/* <button onClick={this.handleBack} className="backBtn">BACK</button>
                    <button onClick={this.handleSubmit} className="nextBtn">Next</button> */}
            </>
        ); // end return
    } // end render
} // end Comments component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comments);