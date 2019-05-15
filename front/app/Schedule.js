import React, { Component } from 'react';

import ScheduleTableContainer from './ScheduleTableContainer';
import ScheduleFormContainer from './ScheduleFormContainer';

class About extends Component {
    constructor(){
        super();
        this.state = {
          data: [],
          isAdd: false,
          isUpdate: false,
          targetItem: null                    // the update target 
        };
    }
  
    componentDidMount(){
        let url = "http://127.0.0.1:13000/back/schedule";
        fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.setState({data:responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }
  
    addItem(item) {
        console.log(item);
        usr = "localhost:3000/schedule/add";
        this.setAdd();
    }
    
    deleteItem(itemId) {
        
    }
    
    updateItem(itemId) {
        let targetItem = this.state.data.find((item)=>item.itemId==itemId);
        console.log(itemId);
        this.setState({targetItem : targetItem,
                        isUpdate : true});
    }
    
    updateItemSubmit(itemId, newItem) {
        let itemIndex = this.state.data.findIndex((item)=>item.itemId==itemId);
        let nextState = update(this.state.data, {
                                [itemIndex] : {$set : item}
                               });
        console.log(itemId, itemIndex);
        // this.setState({data : nextState});
        
        // this statement must at the end of the function
        this.setState({isUpdate : false})
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
        this.setState({isAdd : !isAdd});
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
    const {isAdd, isUpdate} = this.state;
    
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
    } else if (isUpdate) {
        let submitAction = this.updateItemSubmit.bind(this);
        //  get the id and index of the target item 
        let {targetItem} = this.state;

        element2 = (
        <div className="container">
            <br />
            <br />
            <ScheduleFormContainer targetItem={targetItem} submitAction={submitAction}/>
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
