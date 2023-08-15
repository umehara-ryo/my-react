import React, {Component} from 'react';
import './css/02-tab.css';
import Film from "./CinemaCom/Film";
//import Cinema from "./CinemaCom/Cinema";
import Cinema from "./15-betterScroll-Cinema";
import Center from "./CinemaCom/Center";


class App
    extends Component {
    state = {
        current: 0,
        list: [
            {
                id: 1,
                text: '映画'
            }
            ,
            {
                id: 2,
                text: '映画館'
            }
            ,
            {
                id: 3,
                text: '自分'
            }
        ]
    }

    render() {
        return (
            <div>
                {this.which(this.state.current)}


                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={this.state.current === index ? 'active' : ''}
                                onClick={() => this.handleClick(index)}>{item.text}</li>)
                    }
                </ul>

            </div>
        );
    }

    handleClick(index) {
        this.setState({
            current: index
        })
    }

    which = (current) => {
        if (current === 0) {
            return <Film></Film>;
        }
        if (current === 1) {
            return <Cinema></Cinema>;
        }
        if (current === 2) {
            return <Center></Center>;
        }
        return null;
    }

}

export default App;