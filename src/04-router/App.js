import React, {Component} from 'react';
import IndexRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
class App extends Component {
    render() {
        return (
            <div>
                <IndexRouter></IndexRouter>
                <Tabbar></Tabbar>
            </div>
        );
    }
}

export default App;