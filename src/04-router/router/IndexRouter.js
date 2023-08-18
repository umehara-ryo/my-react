import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import Flims from "../views/Flims";
import Center from "../views/Center";
import Detail from "../views/Detail";


class App extends Component {
    render() {
        return (
            <div>

                <HashRouter>
                    <Switch>
                    <Route path="/flims" component={Flims}></Route>
                    <Route path="/center" component={Center}></Route>
                    <Route path="/detail/:myid" component={Detail}></Route>

                    <Redirect from="/*" to="/" exact></Redirect>
                        <Route component={Center}></Route>
                </Switch>
                </HashRouter>

            </div>
        );
    }
}

export default App;