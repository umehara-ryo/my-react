import React, {Component} from 'react';
import {autorun, observable} from "mobx";


var observableNumber = observable.box(10);
var myobj = observable({
    name: 'umehara',
    age:100
})

autorun(()=>{
    console.log(myobj.age);
})

autorun(()=>{
    console.log(observableNumber.get())
})
setInterval(()=>{
    myobj.age += 1;
},1000)

class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        );
    }
}

export default App;