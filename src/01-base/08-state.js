import React, {Component} from 'react';

class APP
    extends Component {
    state = {
        myShow: true
    }

    render() {
        return (
            <div>
                <h1>reactへようこそ</h1>
                <button onMouseOver={()=>{
                    this.setState({
                       myShow: !this.state.myShow
                    })
                }}>{this.state.myShow?"お気に入り":"登録済み"}</button>
            </div>
        );
    }
}

export default APP;