import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dash from "./Student/Dash";
import Show from "./Student/Show";

class StudentDash extends Component {
    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/home/student/showRoutine"
                    component={Show}
                />
                <Route exact path="/home" component={Dash} />
            </Router>
        );
    }
}

ReactDOM.render(<StudentDash />, document.querySelector("#student"));
