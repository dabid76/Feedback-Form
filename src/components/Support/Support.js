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

class Support extends Component {

    state = {
        support: '',
    } // end state
    
    handleSubmit = () => {
        if (this.state.support === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/comment')
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support  })
        } // end if statement
    } // end handleSubmit

    handleBack = () => {
        this.props.history.push('/Understanding')
    } // end handleBack

    handdleInputChange = (event) => {
        this.setState({
            support: event.target.value})
    } // end handdleInputChange

    render() {
        return (
            <>
                <h3>How well are you being supported?</h3>
                    <p>
                        Support?
                    </p>
                    <p>
                        Rate 1 through 5
                    </p>
                        <div className="support">
                            <input type='number' min="1" max="5" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
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
} // end Support component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Support);
