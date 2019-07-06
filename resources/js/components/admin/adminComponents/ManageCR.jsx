import React, { Component } from "react";
import axios from "axios";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";

class ManageCR extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            crs: [],
            status: "Add",
            warning: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get("/api/crs").then(response => {
            // console.log(response.data);
            this.setState({
                crs: response.data
            });
        });
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    handleDelete(email) {
        // console.log(email);
        axios.put(`/api/crs/delete/${email}`).then(response => {
            // console.log(response.data.length);
            if (response.status == 200) {
                axios.get("/api/crs").then(response => {
                    // console.log(response.data);
                    this.setState({
                        crs: response.data
                    });
                });
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            status: "Adding...."
        });
        axios.put(`/api/crs/${this.state.email}`).then(response => {
            // console.log(response.data.length);
            if (response.status == 200) {
                this.setState({
                    status: "Add",
                    email: "",
                    warning: response.data
                });
                axios.get("/api/crs").then(response => {
                    // console.log(response.data);
                    this.setState({
                        crs: response.data
                    });
                });
                document.getElementById("emailBox").value = "";
            } else {
                this.setState({
                    warning: "Adding Failed"
                });
                document.getElementById("emailBox").value = "";
            }
            setTimeout(
                function() {
                    this.setState({ warning: "" });
                }.bind(this),
                1000
            );
        });
    }

    render() {
        return (
            <div className="col-md-12 hero-browser-inner is-revealing">
                <div className="form-box  center-text">
                    <h3 className="google-font center-text">
                        Class Representatives
                    </h3>

                    <div className="container-fluid is-revealing col-md-12">
                        <br />
                        <div className="row">
                            <h6 className="google-font col-md-12">
                                Create a new CR
                            </h6>
                            <input
                                className="form-control col-md-6 offset-md-3"
                                type="email"
                                id="emailBox"
                                onChange={this.handleChange}
                                placeholder="Type the email address"
                            />
                            <br />
                            <br />
                            {this.state.email ? (
                                <button
                                    className="btn btn-success col-md-2 offset-md-5"
                                    onClick={this.handleSubmit}
                                >
                                    {this.state.status}
                                </button>
                            ) : (
                                <div />
                            )}

                            <span className="offset-md-4 col-md-4 text-warning text-center">
                                {this.state.warning}
                            </span>

                            <h4 className="google-font center-text margined-top col-md-4 offset-md-4">
                                All CRs
                            </h4>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Batch</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.crs.map(cr => (
                                        <tr>
                                            <th>{cr.user.name}</th>
                                            <td>{cr.user.email}</td>
                                            <td>{cr.department}</td>
                                            <td>{cr.session}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        this.handleDelete(
                                                            cr.user.email
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageCR;
