import React, {Component} from 'react';

class App5
    extends Component {
    render() {

        return (
            <div>
                <input/>
                <button  onMouseOver={()=>
                console.log(1)
                }></button>
                <button onMouseOver={this.handleClick.bind(this)}></button>
            </div>
        );
    }
   handleClick(){
        console.log(2);
    }
}

export default App5;