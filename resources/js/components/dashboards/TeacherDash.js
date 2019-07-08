import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dash from "./Teacher/Dash";
import Show from "./Teacher/Show";
import Modify from "./Teacher/Modify";

class TeacherDash extends Component {
    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/home/teacher/showRoutine"
                    component={Show}
                />
                <Route
                    exact
                    path="/home/teacher/modifyRoutine"
                    component={Modify}
                />
                <Route exact path="/home" component={Dash} />
            </Router>
        );
    }
}

ReactDOM.render(<TeacherDash />, document.querySelector("#teacher"));
