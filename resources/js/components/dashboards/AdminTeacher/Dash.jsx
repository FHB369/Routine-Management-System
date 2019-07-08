import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Dash extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 dash-box img-bg my-2">
                    <h1 className="google-font text-light">
                        Welcome to your dashboard
                    </h1>
                    <div className="row mt-4">
                        <div className="col mt-4">
                            <h5 className="google-font text-light">
                                Department
                            </h5>
                            <h1 className="google-font text-justify text-light display-4">
                                CSE
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="col dash-box pill-bg py-4 my-2 text-center">
                    <Link
                        to="/home/adminTeacher/showRoutine"
                        className="no-underline"
                    >
                        <div className="zoom-on-hover no-underline text-dark">
                            <h1 className="display-3">
                                <i class="fas fa-calendar-alt" />
                            </h1>
                            Show Routine
                        </div>
                    </Link>
                </div>
                <div className="col ml-3 dash-box pill-bg py-4 my-2 text-center">
                    <Link
                        to="/home/adminTeacher/createRoutine"
                        className="no-underline"
                    >
                        <div className="zoom-on-hover no-underline text-dark">
                            <h1 className="display-3">
                                <i class="fas fa-calendar-plus" />
                            </h1>
                            Create Routine
                        </div>
                    </Link>
                </div>
                <div className="col ml-3 dash-box pill-bg py-4 my-2 text-center">
                    <Link
                        to="/home/adminTeacher/modifyRoutine"
                        className="no-underline"
                    >
                        <div className="zoom-on-hover no-underline text-dark">
                            <h1 className="display-3">
                                <i class="fas fa-calendar-check" />
                            </h1>
                            Modify Routine
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Dash;
