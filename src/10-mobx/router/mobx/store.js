import {action, observable} from "mobx";


var store = observable({
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

// class Store{
//     @observable isTabberShow = true
//     @observable list = []
//
//     @action changeShow(){
//         this.isTabberShow = true
//     }
//     @action changeHide(){
//         this.isTabberShow = false
//     }
// }
//    const store = new Store()
 export default store;