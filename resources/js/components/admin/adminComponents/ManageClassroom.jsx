import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";

class ManageClassroom extends Component {
    constructor() {
        super();
        this.state = {
            room_number: "",
            building: "",
            floor: 0,
            type: "",
            capacity: 0,
            classrooms: [],
            status: "Add",
            warning: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("/api/classrooms").then(response => {
            // console.log(response.data);
            this.setState({
                classrooms: response.data
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            status: "Adding...."
        });

        if (
            event.target.room_number.value !== null &&
            event.target.building.value !== null &&
            event.target.floor.value !== null &&
            event.target.type.value !== null &&
            event.target.capacity.value !== null
        ) {
            const classroom = {
                room_number: event.target.room_number.value,
                building: event.target.building.value,
                floor: event.target.floor.value,
                type: event.target.type.value,
                capacity: event.target.capacity.value
            };

            axios
                .post("/api/classrooms", classroom)
                .then(response => {
                    if (response.status == 200) {
                        this.setState({
                            warning: "Added Successfully",
                            status: "Add"
                        });
                        axios.get("/api/classrooms").then(response => {
                            // console.log(response.data);
                            this.setState({
                                classrooms: response.data
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
                    <h3 className="google-font center-text">Classrooms</h3>

                    <div className="container-fluid is-revealing col-md-12">
                        <br />
                        <div className="row justify-content-center">
                            <h6 className="google-font col-md-12">
                                Add a new classroom
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
                                        name="room_number"
                                        placeholder="Room Number"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="building"
                                        placeholder="Building"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="floor"
                                        placeholder="Floor"
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
                                            Select Classroom Type
                                        </option>
                                        <option>General</option>
                                        <option>Lab</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="capacity"
                                        placeholder="Classroom Capacity"
                                        required
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
                                All Classrooms
                            </h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Room Number</th>
                                        <th scope="col">Building</th>
                                        <th scope="col">Floor</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Capacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.classrooms.map(classroom => (
                                        <tr>
                                            <th>{classroom.room_number}</th>
                                            <td>{classroom.building}</td>
                                            <td>{classroom.floor}</td>
                                            <td>{classroom.type}</td>
                                            <td>{classroom.capacity}</td>
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

export default ManageClassroom;
