import {action, observable} from "mobx";


var obj = observable({
    isTabberShow:true,
    list:[],
    cityName: "東京",
    changeShow(){
        this.isTabberShow = true
    },
    changeHide(){
        this.isTabberShow = false
    }
},{
    changeShow:action,
    changeHide:action
});