import React, { Component } from 'react';
import update from 'react-addons-update'
import {Container} from 'flux/utils';

import ScheduleTableContainer from './ScheduleTableContainer';
import ScheduleFormContainer from './ScheduleFormContainer';
import ScheduleStore from '../stores/ScheduleStore';
import ScheduleActionCreator from '../actions/ScheduleActionCreator';
import Consts from './consts';

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
        this.setAdd();
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
    
    cleanSubmitted() {
        let {STATUS} = Consts;
        let {items} = this.state;
        let newItems = items.filter((item) => {return item.status!=STATUS.SUBMITTED;});            // get the unfinished items 
        console.log(newItems);
        console.log(items == newItems);
        this.setState({items : newItems});
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
        <div className="container">
            <button className="btn btn-default" onClick={this.setAdd.bind(this)}> 
            添加条目
            </button>
            <button className="btn btn-default" onClick={this.cleanSubmitted.bind(this)}> 
            隐藏已完成项目
            </button>
        </div>
        );
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
