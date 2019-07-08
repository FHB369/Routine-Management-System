import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dash from "./AdminTeacher/Dash";
import Create from "./AdminTeacher/Create";
import Show from "./AdminTeacher/Show";
import Modify from "./AdminTeacher/Modify";

class AdminTeacherDash extends Component {
    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/home/adminTeacher/createRoutine"
                    component={Create}
                />
                <Route
                    exact
                    path="/home/adminTeacher/showRoutine"
                    component={Show}
                />
                <Route
                    exact
                    path="/home/adminTeacher/modifyRoutine"
                    component={Modify}
                />
                <Route exact path="/home" component={Dash} />
            </Router>
        );
    }
}

ReactDOM.render(<AdminTeacherDash />, document.querySelector("#adminTeacher"));
