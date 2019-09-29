import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class admin extends Component {

    state = {
        adminData: []
    } // end state

    componentDidMount = () => {
        this.getData();
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
        console.log('btn getting click')
        axios.delete(`/feedback/` + id)
            .then((response) => {
                console.log(response.data);
                this.getData()
            }).catch((error) => {
                console.log('this is the error:', error)
            }) // end axios DELETE
    } // end deleteBtn

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
                        <button onClick={()=>this.deleteBtn(data.id)}>Delete</button>
                        </td>
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