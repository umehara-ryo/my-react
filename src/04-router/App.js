import React, {Component} from 'react';
import {HashRouter, Route, Router} from "react-router-dom";
import Flims from "./views/Flims";
import IndexRouter from "./router/IndexRouter";
class App extends Component {
    render() {
        return (
            <div>
                <IndexRouter></IndexRouter>
            </div>
        );
    }
}

export default App;