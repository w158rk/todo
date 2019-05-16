import React, { Component } from 'react';
import update from 'react-addons-update'

import ScheduleTableContainer from './ScheduleTableContainer';
import ScheduleFormContainer from './ScheduleFormContainer';

class About extends Component {
    constructor(){
        super();
        this.state = {
          data: [],
          isAdd: false,
          isUpdate: false,
          targetItem: null,                    // the update target 
        };
    }
  
    componentDidMount(){
        let url = "/back/schedule";
        fetch(url, {
            method : "get",
        }) 
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.setState({data:responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }

    componentDidUpdate(){
        let {isUpdate} = this.state;
        console.log(isUpdate);
        if(isUpdate){
            this.componentDidMount();
            this.setState({isUpdate : false});
        }
    }


    addItem(item) {
        let url = "/back/schedule/add";
        fetch(url, {
            method : "post",
            headers : {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify(item)
        })
        .then((response) => {
            this.setState({
                isUpdate : true
            });
            this.setAdd();                          // close the input form
        })
        .catch((error) => {
            console.log(error);
        });
        
    }
    
    deleteItem(item) {
        console.log(item);
        let url = "/back/schedule/delete";
        fetch(url, {
            method : "post",
            headers : {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify(item)
        })
        .then((respond) => {
            this.setState({
                isUpdate : true
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    updateItem(item) {
        console.log(item);
        let url = "/back/schedule/update";
        fetch(url, {
            method : "post",
            headers : { 
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify(item)
        })
        .then((respond) => {
            this.setState({
                isUpdate : true
            });
            this.forceUpdate()
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    markItem(itemId, status) {
        let itemIndex = this.state.data.findIndex((item)=>item.itemId == itemId);
        let nextState = update(this.state.data, {
                                [itemIndex] : {
                                    status  :  {$set : status}
                                }});
        this.setState({data:nextState});
    }
    
    setAdd() {
        let {isAdd} = this.state;
        let newIsAdd = !isAdd;
        this.setState({isAdd : newIsAdd});
    }
    
    sortItems(keyName) {            // finished
        var cmpFunction = this.getCmpFunction(keyName);
        var newData = this.state.data.sort(cmpFunction);
        this.setState({data : newData});
    }
    
    getCmpFunction(keyName) {           // finished
        var func = function (o, p) {
                var a, b;
                if (typeof o === "object" && typeof p === "object" && o && p) {
                    a = o[keyName];
                    b = p[keyName];
                    if (a === b) {
                        return 0;
                    }
                    if (typeof a === typeof b) {
                        return a < b ? -1 : 1;
                    }
                    return typeof a < typeof b ? -1 : 1;
                }
        }
        
        return func;
    }
    

  render() {
    let listItems = this.state.data;
    const {isAdd} = this.state;
    
    var element2 = null;
    if(isAdd) { 
        let submitAction = this.addItem.bind(this)
        
        element2 = (
        <div className="container">
            <br />
            <br />
            <ScheduleFormContainer targetItem={null} submitAction={submitAction}/>
        </div>
        );
    }
    else  
        element2 = (
            <button className="btn btn-primary btn-lg btn-block" onClick={this.setAdd.bind(this)}> 
            添加条目
            </button>
        );
    
    return (
    <div className="container">
        <ScheduleTableContainer listItems={listItems} itemActions={{
            deleteItem  :   this.deleteItem.bind(this),
            updateItem  :   this.updateItem.bind(this),
            markItem    :   this.markItem.bind(this),
            sortItems   :   this.sortItems.bind(this)
        }} />        

        {element2}
    </div>
    );
  }
}



export default About;
