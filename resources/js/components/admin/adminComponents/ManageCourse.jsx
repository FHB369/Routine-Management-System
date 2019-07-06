import React, { Component } from "react";
import axios from "axios";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";

class ManageCourse extends Component {
    constructor() {
        super();
        this.state = {
            code: "",
            name: "",
            credit: 0,
            type: "",
            courses: [],
            status: "Add",
            warning: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("/api/courses").then(response => {
            // console.log(response.data);
            this.setState({
                courses: response.data
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            status: "Adding...."
        });

        if (
            event.target.code.value !== null &&
            event.target.name.value !== null &&
            event.target.type.value !== null &&
            event.target.credit.value !== null
        ) {
            const course = {
                code: event.target.code.value,
                name: event.target.name.value,
                type: event.target.type.value,
                credit: event.target.credit.value
            };

            axios
                .post("/api/courses", course)
                .then(response => {
                    if (response.status == 200) {
                        this.setState({
                            warning: "Added Successfully",
                            status: "Add"
                        });
                        axios.get("/api/courses").then(response => {
                            // console.log(response.data);
                            this.setState({
                                courses: response.data
                            });
                        });
                        document.getElementById("emailBox").reset();
                        setTimeout(
                            function() {
                                this.setState({ warning: "" });
                            }.bind(this),
                            1000
                        );
                    } else {
                        this.setState({
                            warning: "Adding Failed",
                            status: "Add"
                        });
                        setTimeout(
                            function() {
                                this.setState({ warning: "" });
                            }.bind(this),
                            1000
                        );
                    }
                })
                .catch(error => {
                    this.setState({
                        warning: error.response.data.errors
                    });
                    setTimeout(
                        function() {
                            this.setState({ warning: "" });
                        }.bind(this),
                        1000
                    );
                });
        }
    }

    render() {
        return (
            <div className="col-md-12 hero-browser-inner is-revealing">
                <div className="form-box  center-text">
                    <h3 className="google-font center-text">Courses</h3>

                    <div className="container-fluid is-revealing col-md-12">
                        <br />
                        <div className="row justify-content-center">
                            <h6 className="google-font col-md-12">
                                Add a new course
                            </h6>
                            <form
                                className="col-md-12"
                                onSubmit={this.handleSubmit}
                                id="emailBox"
                            >
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="code"
                                        placeholder="Course Code"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        placeholder="Course Title"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <select
                                        class="form-control"
                                        name="type"
                                        id="exampleFormControlSelect1"
                                        required
                                    >
                                        <option disabled selected>
                                            Select Course Type
                                        </option>
                                        <option>Theory</option>
                                        <option>Lab</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="credit"
                                        placeholder="Course Credit"
                                        required
                                        step="0.01"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="col-md-4 btn btn-success"
                                >
                                    {this.state.status}
                                </button>
                                <br />
                                <br />
                                <span className="col-md-4 text-info text-center">
                                    {this.state.warning}
                                </span>
                            </form>
                            <div className="col-md-10" />
                            <h4 className="google-font center-text margined-top col-md-4">
                                All Courses
                            </h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Course Code</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Offering Department</th>
                                        <th scope="col">Credit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.courses.map(course => (
                                        <tr>
                                            <th>{course.code}</th>
                                            <td>{course.name}</td>
                                            <td>
                                                {course.code.substring(0, 3)}
                                            </td>
                                            <td>{course.credit}</td>
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

export default ManageCourse;
