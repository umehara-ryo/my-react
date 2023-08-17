import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import Flims from "../views/Flims";
import Center from "../views/Center";


class App extends Component {
    render() {
        return (
            <div>

                <HashRouter>
                    <Switch>
                    <Route path="/flims" component={Flims}></Route>
                    <Route path="/center" component={Center}></Route>
                    <Redirect from="/*" to="/" exact></Redirect >
                        <Route component={Center}></Route>
                </Switch>
                </HashRouter>

            </div>
        );
    }
}

export default App;