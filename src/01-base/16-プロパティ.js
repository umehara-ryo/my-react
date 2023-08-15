import React, {Component} from 'react';
import Navbar from "./Navbar";
class App
    extends Component {
    render() {
        return (
            <div>
            <div>
                <h2>ホーム</h2>
                <Navbar title ="ホーム" ></Navbar>
            </div>
                <div>
                <h2>リスト</h2>
                <Navbar　title ="リスト" leftshow={true}></Navbar>
            </div>
                <div>
                <h2>カート</h2>
                <Navbar　title ="カート" leftshow={true}></Navbar>
            </div>
            </div>
        );
    }
}

export default App;