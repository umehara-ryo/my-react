import React, {Component} from 'react';

class Navbar extends Component{
    render() {
        return
        <div>navbar
        <Children></Children>
        </div>;
    }
}
const Swiper = ()=> <div>swiper</div>
const Tabbar = ()=> <div>tabbar</div>
const Children = ()=> <div>children</div>



class App3
    extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        );
    }
}

export default App3;