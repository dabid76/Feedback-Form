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

class Feeling extends Component {

    state = {
        feeling: ''
        } // end state

    handleSubmit = () => {
        if (this.state.feeling === ''){
            alert('You must fill the input.')
        } else {
        this.props.history.push('/Understanding')
        
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        } // end if statement
    } // end handleSubmit

    handdleInputChange = (event) => {
            this.setState({
                feeling: event.target.value})
    } // end handdleInputChange

    render() {
        return (
            <>
                <h3>How are you feeling?</h3>
                    <p>
                        Feeling?
                    </p>
                    <p>
                        Rate 1 through 5
                    </p>
                        <div className="feelings">
                            <input type="number" min="1" max="5" onChange={(event) => this.handdleInputChange(event, 'numbers')} />
                        </div>
                        <IconButton onClick={()=>this.handleSubmit()} className={useStyles.button}>
                        Next
                        </IconButton>
                        <br/>
            </>
        ); // end return
    } // end render
} // end Feeling component
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Feeling);
