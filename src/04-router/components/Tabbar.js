import React, {Component} from 'react';
import {NavLink, Router} from "react-router-dom";

class Tabbar extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to='/flims'>映画</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cinemas'>映画館</NavLink>
                    </li>
                    <li>
                        <NavLink to='/centern'>自分</NavLink>
                    </li>
                </ul>
            </div>
            </Router>
        );
    }
}

export default Tabbar;