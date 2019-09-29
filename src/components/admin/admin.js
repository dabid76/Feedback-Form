import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
class admin extends Component {

    state = {
        adminData: []
    } // end state

    componentDidMount = () => {
        this.getData();
        this.flaggedBtn();
    } // end componentDidMount

    getData = () => {
        axios.get('/feedback')
            .then(response => {
                this.setState({
                    adminData: response.data
                })
            }).catch(error => {
                console.log('error in getOrders', error)
            }) // end axios GET
    } // end getData

    deleteBtn = (id) => {
        axios.delete(`/feedback/` + id)
            .then((response) => {
                this.getData()
            }).catch((error) => {
                console.log('this is the error:', error)
            }) // end axios DELETE
    } // end deleteBtn

    flaggedBtn = (boolean, id) => {
        let thing = !boolean;
        axios.put('/feedback/' + id + "/" + thing)
            .then((result) => {
                this.getData();
            }).catch((err) => {
                console.log(err);
            }) // end axios PUT
    } // end flaggedBtn

    render() {
        return (
            <>
                <h1>Feedback Results!</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehensive</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                            <th>Flagged</th>
                        </tr>
                </thead>
                <tbody>
                    {this.state.adminData.map((data) =>(
                    <tr key={data.id}>
                        <td>{data.feeling}</td>
                        <td>{data.understanding}</td>
                        <td>{data.support}</td>
                        <td>{data.comments}</td>
                        <td>
                        <IconButton onClick={()=>this.deleteBtn(data.id)} className={useStyles.button} aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                        </td>
                        {data.flagged ?
                        <td className="flagged">
                            <Button variant="contained" onClick={() => this.flaggedBtn(data.flagged, data.id)}>Flag</Button>
                        </td> :
                        <td>
                            <Button variant="contained" onClick={() => this.flaggedBtn(data.flagged, data.id)}>Unflag</Button>
                        </td>
                        }
                    </tr>
                    ))}
                </tbody>
                </table>
            </>
        ); // end return
    } // end render
} // end admin component

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(admin);