import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dash from "./CR/Dash";
import Show from "./CR/Show";
import Modify from "./CR/Modify";

class CRDash extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/home/cr/showRoutine" component={Show} />
                <Route exact path="/home/cr/modifyRoutine" component={Modify} />
                <Route exact path="/home" component={Dash} />
            </Router>
        );
    }
}

ReactDOM.render(<CRDash />, document.querySelector("#crStudent"));
