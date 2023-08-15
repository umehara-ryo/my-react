import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        let {title,leftshow} = this.props;
        return (
            <div>
                {leftshow && <button>戻る</button>}
                navbar{title}
                <button >ホーム</button>
            </div>
        );
    }
}

export default Navbar;