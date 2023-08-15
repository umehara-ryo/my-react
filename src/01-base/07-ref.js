import React, {Component} from 'react';

class App
    extends Component {
    a = 100;
    myref = React.createRef();

    render() {

        return (
            <div>
                <input ref={this.myref}/>

                <button onMouseOver={() => this.handleClick2()}>非常にお勧め　パラメータがあるとき</button>

                <button onMouseOver={
                    this.handleClick
                }>一般勧め</button>
            </div>
        );
    }

    handleClick = () => {
        console.log(2, this.a,this.myref.current.value);
    }

    handleClick2() {
        console.log(2, this.a,this.myref.current.value);
    }
}

export default App;