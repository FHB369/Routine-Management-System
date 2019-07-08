import React, { Component } from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

class App extends Component {
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
    render() {
        return (
            <div className="form-box">
                <form onSubmit={this.handleSessionSubmit}>
                    <div className="row">
                        <div className="col-sm h6 ">
                            <label for="selectSchool"> School </label>{" "}
                            <select
                                className="form-control form-control-sm opacity"
                                name="selectSchool"
                                id="selectSchool"
                            >
                                <option value="1" disabled>
                                    {" "}
                                    Agriculture & Mineral Sciences{" "}
                                </option>{" "}
                                <option value="2">
                                    Applied Sciences & Technology{" "}
                                </option>{" "}
                                <option value="3" disabled>
                                    {" "}
                                    Life Sciences{" "}
                                </option>{" "}
                                <option value="4" disabled>
                                    Management & Business Administration{" "}
                                </option>{" "}
                                <option value="5" disabled>
                                    {" "}
                                    Physical Sciences{" "}
                                </option>{" "}
                                <option value="6" disabled>
                                    {" "}
                                    Social Sciences{" "}
                                </option>{" "}
                            </select>{" "}
                        </div>
                        <div className="col-sm h6 ">
                            <label for="selectDept"> Department </label>{" "}
                            <select
                                className="form-control form-control-sm"
                                name="selectDept"
                                id="selectDept"
                            >
                                <option value="10"> FES </option>{" "}
                                <option value="20"> ARC </option>{" "}
                                <option value="21"> CEP </option>{" "}
                                <option value="22"> CEE </option>{" "}
                                <option value="23"> CSE </option>{" "}
                                <option value="24"> EEE </option>{" "}
                                <option value="25"> FET </option>{" "}
                                <option value="26"> IPE </option>{" "}
                                <option value="27"> MEE </option>{" "}
                                <option value="28"> PME </option>{" "}
                                <option value="30"> BMB </option>{" "}
                                <option value="31"> GEB </option>{" "}
                                <option value="40"> BUS </option>{" "}
                                <option value="50"> CHE </option>{" "}
                                <option value="51"> GEE </option>{" "}
                                <option value="52"> MAT </option>{" "}
                                <option value="53"> OCG </option>{" "}
                                <option value="54"> PHY </option>{" "}
                                <option value="55"> STA </option>{" "}
                                <option value="60"> ANT </option>{" "}
                                <option value="61"> BAN </option>{" "}
                                <option value="62"> ECO </option>{" "}
                                <option value="63"> ENG </option>{" "}
                                <option value="64"> PSS </option>{" "}
                                <option value="65"> PAD </option>{" "}
                                <option value="66"> SCW </option>{" "}
                                <option value="67"> SOC </option>{" "}
                            </select>{" "}
                        </div>
                        <div className="col-sm h6 ">
                            <label for="selectSession"> Session </label>{" "}
                            <select
                                className="form-control form-control-sm"
                                name="session"
                                id="selectSession"
                            >
                                <option> 2015-16 </option>{" "}
                                <option> 2016-17 </option>{" "}
                                <option> 2017-18 </option>{" "}
                                <option> 2018-19 </option>{" "}
                            </select>{" "}
                        </div>{" "}
                        <div className="col-sm h6 ">
                            <label for="selectSemester"> Semester </label>{" "}
                            <select
                                className="form-control form-control-sm"
                                name="semester"
                                id="selectSemester"
                            >
                                <option> 1-1 </option> <option> 1-2 </option>{" "}
                                <option> 2-1 </option> <option> 2-2 </option>{" "}
                                <option> 3-1 </option> <option> 3-2 </option>{" "}
                                <option> 4-1 </option> <option> 4-2 </option>{" "}
                            </select>{" "}
                        </div>{" "}
                        <div className="col-sm h6 ">
                            <label for="selectSection"> Section </label>{" "}
                            <select
                                className="form-control form-control-sm"
                                name="section"
                                id="selectSection"
                            >
                                <option> A </option> <option> B </option>{" "}
                                <option> No Section </option>
                            </select>{" "}
                        </div>{" "}
                    </div>{" "}
                    <br />
                    <button className="btn btn-primary" type="submit">
                        Find Routine{" "}
                    </button>{" "}
                </form>{" "}
                <br />
                {this.state.isShowable ? (
                    <div id="routine-view">
                        <div className="fixed-min">
                            <div className="row">
                                <div
                                    className="col-sm h6  btn btn-primary text-center"
                                    disabled
                                >
                                    Day&nbsp;
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    8-9
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    9-10
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    10-11
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    11-12
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    12-1
                                </div>

                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    2-3
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    3-4
                                </div>
                                <div
                                    className="col-sm h6  btn btn-info text-center"
                                    disabled
                                >
                                    4-5
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm h6  btn btn-primary text-center">
                                    Sunday
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a1"
                                >
                                    {this.state.sunday.t8_9_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a2"
                                >
                                    {this.state.sunday.t9_10_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a3"
                                >
                                    {this.state.sunday.t10_11_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a4"
                                >
                                    {this.state.sunday.t11_12_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a5"
                                >
                                    {this.state.sunday.t12_1_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a6"
                                >
                                    {this.state.sunday.t2_3_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a7"
                                >
                                    {this.state.sunday.t3_4_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="a8"
                                >
                                    {this.state.sunday.t4_5_course}
                                    <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm h6  btn btn-primary text-center">
                                    Monday
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b1"
                                >
                                    {this.state.monday.t8_9_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b2"
                                >
                                    {this.state.monday.t9_10_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b3"
                                >
                                    {this.state.monday.t10_11_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b4"
                                >
                                    {this.state.monday.t11_12_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b5"
                                >
                                    {this.state.monday.t12_1_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b6"
                                >
                                    {this.state.monday.t2_3_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b7"
                                >
                                    {this.state.monday.t3_4_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="b8"
                                >
                                    {this.state.monday.t4_5_course}
                                    <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm h6  btn btn-primary text-center">
                                    Tue
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c1"
                                >
                                    {this.state.tuesday.t8_9_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c2"
                                >
                                    {this.state.tuesday.t9_10_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c3"
                                >
                                    {this.state.tuesday.t10_11_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c4"
                                >
                                    {this.state.tuesday.t11_12_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c5"
                                >
                                    {this.state.tuesday.t12_1_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c6"
                                >
                                    {this.state.tuesday.t2_3_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c7"
                                >
                                    {this.state.tuesday.t3_4_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="c8"
                                >
                                    {this.state.tuesday.t4_5_course}
                                    <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm h6  btn btn-primary text-center">
                                    Wed
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d1"
                                >
                                    {this.state.wednesday.t8_9_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d2"
                                >
                                    {this.state.wednesday.t9_10_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d3"
                                >
                                    {this.state.wednesday.t10_11_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d4"
                                >
                                    {this.state.wednesday.t11_12_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d5"
                                >
                                    {this.state.wednesday.t12_1_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d6"
                                >
                                    {this.state.wednesday.t2_3_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d7"
                                >
                                    {this.state.wednesday.t3_4_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="d8"
                                >
                                    {this.state.wednesday.t4_5_course}
                                    <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm h6  btn btn-primary text-center">
                                    Thursday
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e1"
                                >
                                    {this.state.thursday.t8_9_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e2"
                                >
                                    {this.state.thursday.t9_10_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e3"
                                >
                                    {this.state.thursday.t10_11_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e4"
                                >
                                    {this.state.thursday.t11_12_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e5"
                                >
                                    {this.state.thursday.t12_1_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e6"
                                >
                                    {this.state.thursday.t2_3_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e7"
                                >
                                    {this.state.thursday.t3_4_course}
                                    <br />
                                </div>
                                <div
                                    className="col-sm h6  btn btn-light text-center"
                                    id="e8"
                                >
                                    {this.state.thursday.t4_5_course}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-danger mt-2">
                        No routine found
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app_welcome"));
