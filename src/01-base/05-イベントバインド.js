import React, {Component} from 'react';

class App5
    extends Component {
    render() {
        function handleClick(){
            console.log(2);
        }
        return (
            <div>
                <input/>
                <button  onMouseOver={()=>
                console.log(1)
                }></button>
                <button onMouseOver={handleClick}></button>
            </div>
        );
    }

}

export default App5;