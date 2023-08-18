import {Redirect, Route, Switch} from "react-router-dom";
import Nowplaying from "../Flims/Nowplaying";
import Comingsoon from "../Flims/Comingsoon";

export default function Flims(){

    return(
        <div>

            <div style={{height:'200px',background:'lightpink'}}>slideshow</div>

            <Switch>
            <Route path='/flims/nowplaying' component={Nowplaying}></Route>
            <Route path='/flims/comingsoon' component={Comingsoon}></Route>
            <Redirect from='/flims' to='/flims/nowplaying'></Redirect>
            </Switch>
        </div>
    )

}