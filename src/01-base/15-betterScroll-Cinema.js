import React, {Component} from 'react';
import axios from 'axios';
import BetterScroll from "better-scroll";

class Cinema extends Component {
    state = {
        cinemaList: []
    }
    constructor() {
        super();
        /*axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159")
            .then(res=>{
                console.log(res)
            })//成功
            .catch(err=>{})//失敗*/


        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            console.log(res.data.data.cinemas);
            this.setState({
                cinemaList: res.data.data.cinemas
            });
            new BetterScroll(".wrapper");
        });



    }

    axios(){
    }
    render() {
        return (
            <div>
                <input onInput={(e)=>this.handleInput(e)}/>

                <div className="wrapper" style={{height:'500px',background:'yellow',overflow:'hidden'}}>
                <div>
                {
                    this.state.cinemaList.map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>)
                }
                </div>
                </div>

            </div>
        );
    }

    handleInput(e){

        console.log('input',e.target.value);
        let list = this.state.cinemaList.filter(i =>
            i.name.toUpperCase().includes(e.target.value.toUpperCase())
            ||
            i.address.toUpperCase().includes(e.target.value.toUpperCase())
        );
        console.log(list)
        this.setState({
            cinemaList: list
        })

    }
}

export default Cinema;