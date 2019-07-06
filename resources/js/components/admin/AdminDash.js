import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./adminComponents/Dashboard";
import ManageCR from "./adminComponents/ManageCR";
import ManageAdminTeacher from "./adminComponents/ManageAdminTeacher";
import ManageClassroom from "./adminComponents/ManageClassroom";
import ManageCourse from "./adminComponents/ManageCourse";

class AdminDash extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/admin/home" component={Dashboard} />
                <Route exact path="/admin/home/manageCR" component={ManageCR} />
                <Route
                    exact
                    path="/admin/home/manageAdminTeacher"
                    component={ManageAdminTeacher}
                />
                <Route
                    exact
                    path="/admin/home/manageClassroom"
                    component={ManageClassroom}
                />
                <Route
                    exact
                    path="/admin/home/manageCourse"
                    component={ManageCourse}
                />
            </Router>
        );
    }
}

ReactDOM.render(<AdminDash />, document.querySelector("#admin-dash"));
