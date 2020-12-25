import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import aboutUs from "./aboutUs.js";
import contactUs from "./contactUs.js";
import ourSolution from "./ourSolution.js";
import Home from "./home.js";
import ourTeam from './ourTeam.js';

export default class Routes extends Component {
    render() {
        return (
            <HashRouter >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutUs" component={aboutUs} />
                    <Route path="/team" component={ourTeam} />
                    <Route path="/solution" component={ourSolution} />
                    <Route path="/contact" component={contactUs} />
                </Switch>
            </HashRouter>
        )
    }
}