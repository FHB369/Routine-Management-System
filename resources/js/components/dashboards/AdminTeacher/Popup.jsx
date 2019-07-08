import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classrooms: this.props.classrooms,
            courses: this.props.courses,
            semester: this.props.semester,
            section: this.props.section,
            session: this.props.session,
            id: this.props.id,
            day: "",
            slot: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const tid = this.props.id;
        const day = tid.substring(0, 1);
        const time = tid.substring(1, 2);

        if (day === "a") {
            this.setState({
                day: "Sunday"
            });
        } else if (day === "b") {
            this.setState({
                day: "Monday"
            });
        } else if (day === "c") {
            this.setState({
                day: "Tuesday"
            });
        } else if (day === "d") {
            this.setState({
                day: "Wednesday"
            });
        } else if (day === "e") {
            this.setState({
                day: "Thursday"
            });
        }

        if (time === "1") {
            this.setState({
                slot: "8_9"
            });
        } else if (time === "2") {
            this.setState({
                slot: "9_10"
            });
        } else if (time === "3") {
            this.setState({
                slot: "10_11"
            });
        } else if (time === "4") {
            this.setState({
                slot: "11_12"
            });
        } else if (time === "5") {
            this.setState({
                slot: "12_1"
            });
        } else if (time === "6") {
            this.setState({
                slot: "2_3"
            });
        } else if (time === "7") {
            this.setState({
                slot: "3_4"
            });
        } else if (time === "8") {
            this.setState({
                slot: "4_5"
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
            .put(
                `/api/routine/CSE/${this.state.session}/${
                    this.state.semester
                }/${this.state.section}/${this.state.day}/${this.state.slot}/${
                    event.target.course.value
                }/${event.target.classroom.value}`
            )
            .then(response => {
                if (response.status == 200) {
                    console.log("Putted");
                    this.props.closePopup();
                    console.log("Putted");
                    this.props.reload();
                }
            });
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="dash-box col-md-6 offset-md-3 text-center">
                        {this.state.courses.length !== 0 &&
                        this.state.classrooms.length !== 0 ? (
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">
                                        Select Course
                                    </label>
                                    <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        name="course"
                                    >
                                        <option value="None">None</option>
                                        {this.state.courses.map(course => (
                                            <option>{course.code}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">
                                        Select Classroom
                                    </label>
                                    <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        name="classroom"
                                    >
                                        <option value="None">None</option>
                                        {this.state.classrooms.map(
                                            classroom => (
                                                <option>
                                                    {classroom.room_number}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                {/* <span>{this.props.id}</span> */}
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-info text-light"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className="form-group">
                                    <button
                                        onClick={this.props.togglePopup}
                                        className="btn btn-danger text-light"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div>
                                No course or classroom found
                                <br />
                                <br />
                                <div className="form-group">
                                    <button
                                        onClick={this.props.togglePopup}
                                        className="btn btn-danger text-light"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Popup;
