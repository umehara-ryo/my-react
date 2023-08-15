import React, {Component} from 'react';

class App6
    extends Component {
    a = 100;

    render() {

        return (
            <div>
                <input/>

                <button onMouseOver={() => this.handleClick2()}>非常にお勧め　パラメータがあるとき</button>
                <button onMouseOver={
                    this.handleClick
                }>一般勧め</button>
            </div>
        );
    }

    handleClick = () => {
        console.log(2, this.a);
    }

    handleClick2() {
        console.log(2, this.a);
    }
}

export default App6;