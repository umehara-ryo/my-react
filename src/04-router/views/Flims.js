import {Route} from "react-router-dom";
import Nowplaying from "../Flims/Nowplaying";
import Comingsoon from "../Flims/Comingsoon";

export default function Flims(){

    return(
        <div>

            <div style={{height:'200px',background:'lightpink'}}>slideshow</div>

            <Route path='/flims/nowpalying' component={Nowplaying}></Route>
            <Route path='/flims/comingsoon' component={Comingsoon}></Route>
        </div>
    )

}