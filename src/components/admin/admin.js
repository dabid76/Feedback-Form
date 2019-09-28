import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class ThankYou extends Component {

    state = {
        adminData: []
    }
    componentDidMount = () => {
        this.getData();
    }
    getData = () => {
        axios.get('/feedback')
            .then(response => {
                this.setState({
                    adminData: response.data
                })
            }).catch(error => {
                console.log('error in getOrders', error)
            })
    }

    handleSubmit = (id) => {
        // event.preventDefault();
        console.log('btn getting click')
            axios.delete(`/feedback/delete/${id}`)
            .then((response) => {
                console.log(response);
                this.getDatak()
            }).catch((error) => {
                console.log('error on delete:', error)
            })
    }


        
    
    

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
                            <button onClick={this.handleSubmit} className="submitBtn">Delete</button>
                        </td>
                    </tr>
                )
                )}

                </tbody>
            </table>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(ThankYou);