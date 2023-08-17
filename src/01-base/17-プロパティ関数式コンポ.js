import React, {Component} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
class App
    extends Component {
    render() {
        return (

            <div>
                <Sidebar bg='yellow'></Sidebar>
            </div>
        );
    }
}

export default App;