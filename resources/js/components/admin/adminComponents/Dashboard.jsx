import React, { Component } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            crs: 0,
            adminTeachers: 0,
            classrooms: 0
        };
    }

    componentDidMount() {
        axios.get("/api/classrooms").then(response => {
            // console.log(response.data.length);
            this.setState({
                classrooms: response.data.length
            });
        });

        axios.get("/api/crs").then(response => {
            // console.log(response.data.length);
            this.setState({
                crs: response.data.length
            });
        });

        axios.get("/api/adminTeachers").then(response => {
            // console.log(response.data.length);
            this.setState({
                adminTeachers: response.data.length
            });
        });
    }

    render() {
        return (
            <div className="col-md-12 hero-browser-inner is-revealing">
                <div className="form-box center-text">
                    <h3 className="google-font center-text">Admin Dashboard</h3>

                    <div className="container-fluid is-revealing col-md-12">
                        <br />
                        <div className="row">
                            <div className="col-sm-3">
                                <NavLink
                                    to="/admin/home/manageCR"
                                    className=" no-underline"
                                >
                                    <img
                                        src="/images/student-icon.svg"
                                        className="dashboard-icons"
                                    />
                                    <br />
                                    <h6 className="google-font no-underline">
                                        Manage CRs
                                    </h6>
                                </NavLink>
                            </div>

                            <div className="col-sm-3">
                                <NavLink
                                    to="/admin/home/manageAdminTeacher"
                                    className=" no-underline"
                                >
                                    <img
                                        src="/images/teacher-icon.svg"
                                        className="dashboard-icons"
                                    />
                                    <br />
                                    <h6 className="google-font no-underline">
                                        Manage Admin Teachers
                                    </h6>
                                </NavLink>
                            </div>

                            <div className="col-sm-3">
                                <NavLink
                                    to="/admin/home/manageCourse"
                                    className=" no-underline"
                                >
                                    <img
                                        src="/images/course-icon.svg"
                                        className="dashboard-icons"
                                    />
                                    <br />
                                    <h6 className="google-font no-underline">
                                        Manage Courses
                                    </h6>
                                </NavLink>
                            </div>

                            <div className="col-sm-3">
                                <NavLink
                                    to="/admin/home/manageClassroom"
                                    className=" no-underline"
                                >
                                    <img
                                        src="/images/classroom-icon.svg"
                                        className="dashboard-icons"
                                    />
                                    <br />
                                    <h6 className="google-font no-underline">
                                        Manage Classrooms
                                    </h6>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="container-fluid is-revealing col-md-12">
                        <div className="row">
                            <div className="col-md-4 left">
                                <div className="form-box dash-1">
                                    <h5 className="google-font">
                                        Total Classrooms
                                    </h5>
                                    <h1 className="google-font big-text">
                                        <b>{this.state.classrooms}</b>
                                    </h1>
                                    <Link
                                        className=" no-underline"
                                        to="/admin/home/manageClassroom"
                                    >
                                        See All&nbsp;
                                        <i className="fas fa-arrow-circle-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 center">
                                <div className="form-box dash-2 ">
                                    <h5 className="google-font">
                                        Total Class&nbsp;Representatives
                                    </h5>
                                    <h1 className="google-font big-text">
                                        <b>{this.state.crs}</b>
                                    </h1>
                                    <Link
                                        className=" no-underline"
                                        to="/admin/home/manageCR"
                                    >
                                        See All&nbsp;
                                        <i className="fas fa-arrow-circle-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 right">
                                <div className="form-box dash-3">
                                    <h5 className="google-font">
                                        Total Admin&nbsp;Teachers
                                    </h5>
                                    <h1 className="google-font big-text">
                                        <b>{this.state.adminTeachers}</b>
                                    </h1>
                                    <Link
                                        to="/admin/home/manageAdminTeacher"
                                        className=" no-underline"
                                    >
                                        See All&nbsp;
                                        <i className="fas fa-arrow-circle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
