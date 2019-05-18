import React, { Component } from 'react';
import update from 'react-addons-update'
import {Container} from 'flux/utils';

import ScheduleTableContainer from './ScheduleTableContainer';
import ScheduleFormContainer from './ScheduleFormContainer';
import ScheduleStore from '../stores/ScheduleStore';
import ScheduleActionCreator from '../actions/ScheduleActionCreator'

class Schedule extends Component {
    constructor(){
        super();
        this.state = {
          items: [],
          isAdd: false,
          isUpdate: false,
          targetItem: null,                    // the update target 
        };
    }
  
    componentDidMount(){
        ScheduleActionCreator.fetchSchedules();
    }

    addItem(item) {
        ScheduleActionCreator.addSchedule(item);
    }
    
    deleteItem(item) {
        ScheduleActionCreator.deleteSchedule(item);
    }
    
    updateItem(item, draft) {
        ScheduleActionCreator.updateSchedule(item, draft);
    }
    
    setAdd() {
        let {isAdd} = this.state;
        let newIsAdd = !isAdd;
        this.setState({isAdd : newIsAdd});
    }
    
    sortItems(keyName) {            // finished
        let {items} = this.state;
        ScheduleActionCreator.sortSchedule(items, keyName);
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
    let {items, isAdd} = this.state;
    
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
    console.log(items);
    return (
        <div className="container">
            <ScheduleTableContainer items={items} itemActions={{
                deleteItem  :   this.deleteItem.bind(this),
                updateItem  :   this.updateItem.bind(this),
                sortItems   :   this.sortItems.bind(this)
            }} />        

            {element2}
        </div>
    );
  }
}

Schedule.getStores = () => ([ScheduleStore]);               // set store 

Schedule.calculateState = (prevState) => ({
    items   :   ScheduleStore.getState()
});                                                             // 状态更新

export default Container.create(Schedule);
