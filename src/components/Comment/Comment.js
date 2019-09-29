import React, { Component } from 'react';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

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
            this.setState({
                comments: event.target.value
            }) // end setState
    } // end handdleInputChange

    handleBack = () => {
        this.props.history.push('/support')
    } // end handleBack

    handleSubmit = () => {
            this.props.history.push('/Review')
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
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
            </>
        ); // end return
    } // end render
} // end Comments component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Comments);