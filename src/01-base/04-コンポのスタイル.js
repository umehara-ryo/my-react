import React, {Component} from 'react';
import './css/01-index.css'

class App4
    extends Component {
    render() {
        var myName = 'umehara';
        var obj = {
            backgroundColor: "yellow",
            fontSize: "30px"
        }


        return (
            <div>
                {myName}
                <div style={obj}>1111</div>
                <div style={{background: "red"}}>1111</div>
                {/*<div className='active'>1111</div>*/}
            </div>
        );
    }
}

export default App4;