import React, {Component} from 'react';

class App
    extends Component {
    state = {
        myShow: true,
        list: ['aa', 'vv', 'cc']

    }
    myref = React.createRef();

    render() {

        return (
            <div>
                <h1>reactへようこそ</h1>
                <input ref={this.myref}/>
                <button onMouseOver={this.handleClick}>追加</button>


                <ul>
                    {this.state.list.map(i =>
                        <li key={i}>{i}</li>
                    )}
                </ul>
            </div>
        );
    }

    handleClick = () => {

        let list = [...this.state.list];
         list = this.state.list.slice();
         //引数を代入しないと、コピーになります
        list.push(this.myref.current.value);

        this.setState(
            {
                list: list
            })
    }


}

export default App;