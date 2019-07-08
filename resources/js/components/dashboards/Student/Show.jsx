import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            id: "",
            error: "",
            isPopup: false,
            session: "",
            semester: "",
            section: "",
            courses: [],
            dept: "",
            classrooms: [],
            isShowable: false
        };

        this.handleSessionSubmit = this.handleSessionSubmit.bind(this);
    }

    handleSessionSubmit(event) {
        event.preventDefault();
        if (
            event.target.semester.value != null &&
            event.target.session.value != null &&
            event.target.section.value != null
        ) {
            this.setState({
                session: event.target.session.value,
                semester: event.target.semester.value,
                section: event.target.section.value
            });

            axios
                .put(`/api/courses/${event.target.semester.value}`)
                .then(response => {
                    if (response.status == 200) {
                        this.setState({
                            courses: response.data
                        });
                        console.log(this.state.courses);
                    }
                });

            axios.get("/api/classrooms").then(response => {
                if (response.status == 200) {
                    this.setState({
                        classrooms: response.data
                    });
                    console.log(this.state.classrooms);
                }
            });

            axios
                .get(
                    `/api/routine/CSE/${event.target.session.value}/${
                        event.target.semester.value
                    }/${event.target.section.value}/Sunday`
                )
                .then(response => {
                    if (response.status == 200 && response.data.length != 0) {
                        this.setState({
                            sunday: response.data[0],
                            isShowable: true
                        });
                        console.log("Sunday:");
                        console.log(this.state.sunday);
                    } else {
                        this.setState({
                            isShowable: false
                        });
                    }
                });

            axios
                .get(
                    `/api/routine/CSE/${event.target.session.value}/${
                        event.target.semester.value
                    }/${event.target.section.value}/Monday`
                )
                .then(response => {
                    if (response.status == 200 && response.data.length != 0) {
                        this.setState({
                            monday: response.data[0],
                            isShowable: true
                        });
                        console.log(this.state.monday);
                    } else {
                        this.setState({
                            isShowable: false
                        });
                    }
                });

            axios
                .get(
                    `/api/routine/CSE/${event.target.session.value}/${
                        event.target.semester.value
                    }/${event.target.section.value}/Tuesday`
                )
                .then(response => {
                    if (response.status == 200 && response.data.length != 0) {
                        this.setState({
                            tuesday: response.data[0],
                            isShowable: true
                        });
                        console.log(this.state.tuesday);
                    } else {
                        this.setState({
                            isShowable: false
                        });
                    }
                });

            axios
                .get(
                    `/api/routine/CSE/${event.target.session.value}/${
                        event.target.semester.value
                    }/${event.target.section.value}/Wednesday`
                )
                .then(response => {
                    if (response.status == 200 && response.data.length != 0) {
                        this.setState({
                            wednesday: response.data[0],
                            isShowable: true
                        });
                        console.log(this.state.wednesday);
                    } else {
                        this.setState({
                            isShowable: false
                        });
                    }
                });

            axios
                .get(
                    `/api/routine/CSE/${event.target.session.value}/${
                        event.target.semester.value
                    }/${event.target.section.value}/Thursday`
                )
                .then(response => {
                    if (response.status == 200 && response.data.length != 0) {
                        this.setState({
                            thursday: response.data[0],
                            isShowable: true
                        });
                        console.log(this.state.thursday);
                    } else {
                        this.setState({
                            isShowable: false
                        });
                    }
                });
        }
    }

    reload() {
        axios
            .get(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/Sunday`
            )
            .then(response => {
                if (response.status == 200 && response.data.length != 0) {
                    this.setState({
                        sunday: response.data[0]
                    });
                    console.log("Sunday:");
                    console.log(this.state.sunday);
                } else if (
                    response.status == 200 &&
                    response.data.length == 0
                ) {
                    const dummy = {
                        department: "CSE",
                        session: this.state.session,
                        semester: this.state.semester,
                        section: this.state.section,
                        day: "Sunday",
                        t8_9_course: "",
                        t8_9_classroom: "",
                        t9_10_course: "",
                        t9_10_classroom: "",
                        t10_11_course: "",
                        t10_11_classroom: "",
                        t11_12_course: "",
                        t11_12_classroom: "",
                        t12_1_course: "",
                        t12_1_classroom: "",
                        t2_3_course: "",
                        t2_3_classroom: "",
                        t3_4_course: "",
                        t3_4_classroom: "",
                        t4_5_course: "",
                        t4_5_classroom: ""
                    };
                    axios.post("/api/routine/", dummy).then(response => {
                        if (response.status == 200) {
                            console.log("successfully initiated");
                        }
                    });
                }
            });

        axios
            .get(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/Monday`
            )
            .then(response => {
                if (response.status == 200 && response.data.length != 0) {
                    this.setState({
                        monday: response.data[0]
                    });
                    console.log(this.state.monday);
                } else if (
                    response.status == 200 &&
                    response.data.length == 0
                ) {
                    const dummy = {
                        department: "CSE",
                        session: this.state.session,
                        semester: this.state.semester,
                        section: this.state.section,
                        day: "Monday",
                        t8_9_course: "",
                        t8_9_classroom: "",
                        t9_10_course: "",
                        t9_10_classroom: "",
                        t10_11_course: "",
                        t10_11_classroom: "",
                        t11_12_course: "",
                        t11_12_classroom: "",
                        t12_1_course: "",
                        t12_1_classroom: "",
                        t2_3_course: "",
                        t2_3_classroom: "",
                        t3_4_course: "",
                        t3_4_classroom: "",
                        t4_5_course: "",
                        t4_5_classroom: ""
                    };
                    axios.post("/api/routine/", dummy).then(response => {
                        if (response.status == 200) {
                            console.log("successfully initiated");
                        }
                    });
                }
            });

        axios
            .get(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/Tuesday`
            )
            .then(response => {
                if (response.status == 200 && response.data.length != 0) {
                    this.setState({
                        tuesday: response.data[0]
                    });
                    console.log(this.state.tuesday);
                } else if (
                    response.status == 200 &&
                    response.data.length == 0
                ) {
                    const dummy = {
                        department: "CSE",
                        session: this.state.session,
                        semester: this.state.semester,
                        section: this.state.section,
                        day: "Tuesday",
                        t8_9_course: "",
                        t8_9_classroom: "",
                        t9_10_course: "",
                        t9_10_classroom: "",
                        t10_11_course: "",
                        t10_11_classroom: "",
                        t11_12_course: "",
                        t11_12_classroom: "",
                        t12_1_course: "",
                        t12_1_classroom: "",
                        t2_3_course: "",
                        t2_3_classroom: "",
                        t3_4_course: "",
                        t3_4_classroom: "",
                        t4_5_course: "",
                        t4_5_classroom: ""
                    };
                    axios.post("/api/routine/", dummy).then(response => {
                        if (response.status == 200) {
                            console.log("successfully initiated");
                        }
                    });
                }
            });

        axios
            .get(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/Wednesday`
            )
            .then(response => {
                if (response.status == 200 && response.data.length != 0) {
                    this.setState({
                        wednesday: response.data[0]
                    });
                    console.log(this.state.wednesday);
                } else if (
                    response.status == 200 &&
                    response.data.length == 0
                ) {
                    const dummy = {
                        department: "CSE",
                        session: this.state.session,
                        semester: this.state.semester,
                        section: this.state.section,
                        day: "Wednesday",
                        t8_9_course: "",
                        t8_9_classroom: "",
                        t9_10_course: "",
                        t9_10_classroom: "",
                        t10_11_course: "",
                        t10_11_classroom: "",
                        t11_12_course: "",
                        t11_12_classroom: "",
                        t12_1_course: "",
                        t12_1_classroom: "",
                        t2_3_course: "",
                        t2_3_classroom: "",
                        t3_4_course: "",
                        t3_4_classroom: "",
                        t4_5_course: "",
                        t4_5_classroom: ""
                    };
                    axios.post("/api/routine/", dummy).then(response => {
                        if (response.status == 200) {
                            console.log("successfully initiated");
                        }
                    });
                }
            });

        axios
            .get(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/Thursday`
            )
            .then(response => {
                if (response.status == 200 && response.data.length != 0) {
                    this.setState({
                        thursday: response.data[0]
                    });
                    console.log(this.state.thursday);
                } else if (
                    response.status == 200 &&
                    response.data.length == 0
                ) {
                    const dummy = {
                        department: "CSE",
                        session: this.state.session,
                        semester: this.state.semester,
                        section: this.state.section,
                        day: "Thursday",
                        t8_9_course: "",
                        t8_9_classroom: "",
                        t9_10_course: "",
                        t9_10_classroom: "",
                        t10_11_course: "",
                        t10_11_classroom: "",
                        t11_12_course: "",
                        t11_12_classroom: "",
                        t12_1_course: "",
                        t12_1_classroom: "",
                        t2_3_course: "",
                        t2_3_classroom: "",
                        t3_4_course: "",
                        t3_4_classroom: "",
                        t4_5_course: "",
                        t4_5_classroom: ""
                    };
                    axios.post("/api/routine/", dummy).then(response => {
                        if (response.status == 200) {
                            console.log("successfully initiated");
                        }
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <div
                    id="top-box"
                    className="dash-box col-md-10 offset-md-1 py-2 text-center"
                >
                    <h4 className="google-font mt-4 text-center">
                        Select Session & Semester
                    </h4>
                    <br />

                    <form onSubmit={this.handleSessionSubmit}>
                        <div class="form-group">
                            <div className="row">
                                <select
                                    class="col form-control"
                                    id="exampleFormControlSelect1"
                                    required
                                    name="session"
                                >
                                    <option disabled selected>
                                        Select Session
                                    </option>
                                    <option>2015-16</option>
                                    <option>2016-17</option>
                                    <option>2017-18</option>
                                    <option>2018-19</option>
                                </select>

                                <select
                                    class="col ml-2 form-control"
                                    id="exampleFormControlSelect1"
                                    required
                                    name="semester"
                                >
                                    <option disabled selected>
                                        Select Semester
                                    </option>
                                    <option>1-1</option>
                                    <option>1-2</option>
                                    <option>2-1</option>
                                    <option>2-2</option>
                                    <option>3-1</option>
                                    <option>3-2</option>
                                    <option>4-1</option>
                                    <option>4-2</option>
                                </select>

                                <select
                                    class="col ml-2 form-control"
                                    id="exampleFormControlSelect1"
                                    required
                                    name="section"
                                >
                                    <option disabled selected>
                                        Select Section
                                    </option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>No Section</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
                {this.state.isShowable ? (
                    <div id="routine-view">
                        <div className="fixed">
                            <div className="row">
                                <div
                                    className="col btn btn-primary text-center fixed-day"
                                    disabled
                                >
                                    Day&nbsp;
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    8-9
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    9-10
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    10-11
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    11-12
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    12-1
                                </div>
                                <div
                                    className="col btn btn-primary text-center fixed-break"
                                    disabled
                                >
                                    Break
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    2-3
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    3-4
                                </div>
                                <div
                                    className="col btn btn-info text-center"
                                    disabled
                                >
                                    4-5
                                </div>
                            </div>
                            <div className="row">
                                <div className="col btn btn-primary text-center fixed-day">
                                    Sunday
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a1"
                                >
                                    {this.state.sunday.t8_9_course}
                                    <br />
                                    {this.state.sunday.t8_9_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a2"
                                >
                                    {this.state.sunday.t9_10_course}
                                    <br />
                                    {this.state.sunday.t9_10_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a3"
                                >
                                    {this.state.sunday.t10_11_course}
                                    <br />
                                    {this.state.sunday.t10_11_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a4"
                                >
                                    {this.state.sunday.t11_12_course}
                                    <br />
                                    {this.state.sunday.t11_12_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a5"
                                >
                                    {this.state.sunday.t12_1_course}
                                    <br />
                                    {this.state.sunday.t12_1_classroom}
                                </div>
                                <div className="col btn btn-primary text-center fixed-break">
                                    &nbsp;
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a6"
                                >
                                    {this.state.sunday.t2_3_course}
                                    <br />
                                    {this.state.sunday.t2_3_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a7"
                                >
                                    {this.state.sunday.t3_4_course}
                                    <br />
                                    {this.state.sunday.t3_4_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="a8"
                                >
                                    {this.state.sunday.t4_5_course}
                                    <br />
                                    {this.state.sunday.t4_5_classroom}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col btn btn-primary text-center fixed-day">
                                    Monday
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b1"
                                >
                                    {this.state.monday.t8_9_course}
                                    <br />
                                    {this.state.monday.t8_9_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b2"
                                >
                                    {this.state.monday.t9_10_course}
                                    <br />
                                    {this.state.monday.t9_10_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b3"
                                >
                                    {this.state.monday.t10_11_course}
                                    <br />
                                    {this.state.monday.t10_11_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b4"
                                >
                                    {this.state.monday.t11_12_course}
                                    <br />
                                    {this.state.monday.t11_12_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b5"
                                >
                                    {this.state.monday.t12_1_course}
                                    <br />
                                    {this.state.monday.t12_1_classroom}
                                </div>
                                <div className="col btn btn-primary text-center fixed-break">
                                    &nbsp;
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b6"
                                >
                                    {this.state.monday.t2_3_course}
                                    <br />
                                    {this.state.monday.t2_3_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b7"
                                >
                                    {this.state.monday.t3_4_course}
                                    <br />
                                    {this.state.monday.t3_4_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="b8"
                                >
                                    {this.state.monday.t4_5_course}
                                    <br />
                                    {this.state.monday.t4_5_classroom}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col btn btn-primary text-center fixed-day">
                                    Tuesday
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c1"
                                >
                                    {this.state.tuesday.t8_9_course}
                                    <br />
                                    {this.state.tuesday.t8_9_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c2"
                                >
                                    {this.state.tuesday.t9_10_course}
                                    <br />
                                    {this.state.tuesday.t9_10_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c3"
                                >
                                    {this.state.tuesday.t10_11_course}
                                    <br />
                                    {this.state.tuesday.t10_11_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c4"
                                >
                                    {this.state.tuesday.t11_12_course}
                                    <br />
                                    {this.state.tuesday.t11_12_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c5"
                                >
                                    {this.state.tuesday.t12_1_course}
                                    <br />
                                    {this.state.tuesday.t12_1_classroom}
                                </div>
                                <div className="col btn btn-primary text-center fixed-break">
                                    &nbsp;
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c6"
                                >
                                    {this.state.tuesday.t2_3_course}
                                    <br />
                                    {this.state.tuesday.t2_3_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c7"
                                >
                                    {this.state.tuesday.t3_4_course}
                                    <br />
                                    {this.state.tuesday.t3_4_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="c8"
                                >
                                    {this.state.tuesday.t4_5_course}
                                    <br />
                                    {this.state.tuesday.t4_5_classroom}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col btn btn-primary text-center fixed-day">
                                    Wednesday
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d1"
                                >
                                    {this.state.wednesday.t8_9_course}
                                    <br />
                                    {this.state.wednesday.t8_9_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d2"
                                >
                                    {this.state.wednesday.t9_10_course}
                                    <br />
                                    {this.state.wednesday.t9_10_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d3"
                                >
                                    {this.state.wednesday.t10_11_course}
                                    <br />
                                    {this.state.wednesday.t10_11_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d4"
                                >
                                    {this.state.wednesday.t11_12_course}
                                    <br />
                                    {this.state.wednesday.t11_12_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d5"
                                >
                                    {this.state.wednesday.t12_1_course}
                                    <br />
                                    {this.state.wednesday.t12_1_classroom}
                                </div>
                                <div className="col btn btn-primary text-center fixed-break">
                                    &nbsp;
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d6"
                                >
                                    {this.state.wednesday.t2_3_course}
                                    <br />
                                    {this.state.wednesday.t2_3_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d7"
                                >
                                    {this.state.wednesday.t3_4_course}
                                    <br />
                                    {this.state.wednesday.t3_4_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="d8"
                                >
                                    {this.state.wednesday.t4_5_course}
                                    <br />
                                    {this.state.wednesday.t4_5_classroom}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col btn btn-primary text-center fixed-day">
                                    Thursday
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e1"
                                >
                                    {this.state.thursday.t8_9_course}
                                    <br />
                                    {this.state.thursday.t8_9_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e2"
                                >
                                    {this.state.thursday.t9_10_course}
                                    <br />
                                    {this.state.thursday.t9_10_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e3"
                                >
                                    {this.state.thursday.t10_11_course}
                                    <br />
                                    {this.state.thursday.t10_11_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e4"
                                >
                                    {this.state.thursday.t11_12_course}
                                    <br />
                                    {this.state.thursday.t11_12_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e5"
                                >
                                    {this.state.thursday.t12_1_course}
                                    <br />
                                    {this.state.thursday.t12_1_classroom}
                                </div>
                                <div className="col btn btn-primary text-center fixed-break">
                                    &nbsp;
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e6"
                                >
                                    {this.state.thursday.t2_3_course}
                                    <br />
                                    {this.state.thursday.t2_3_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e7"
                                >
                                    {this.state.thursday.t3_4_course}
                                    <br />
                                    {this.state.thursday.t3_4_classroom}
                                </div>
                                <div
                                    className="col btn btn-light text-center"
                                    id="e8"
                                >
                                    {this.state.thursday.t4_5_course}
                                    <br />
                                    {this.state.thursday.t4_5_classroom}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-danger mt-2">
                        <h1 className="google-font text-danger mt-2">
                            No routine found!
                        </h1>
                    </div>
                )}
            </div>
        );
    }
}
export default Show;
