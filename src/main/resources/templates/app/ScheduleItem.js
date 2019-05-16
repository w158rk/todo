import React, { Component } from 'react';
import STATUS from './consts';

class ScheduleItem extends Component {
  
  render() {
    
    let item = this.props.item;

    
    let color = ""
    switch(item.status){
        case STATUS.URGENT: 
            color = "danger";
            break;
        case STATUS.FINISHED:
            color = "warning";
            break;
        case STATUS.SUBMITTED:
            color = "success";
    };
    
    let {deleteItem, markItem, updateItem} = this.props.itemActions;
    
    return (
        <tr className={color} >
            <td>{item.subject}</td>             
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.issueDate}</td>       
            <td>{item.dueDate}</td>           
            <td>{item.finishDate}</td>
            <td>{item.submitDate}</td>
            <td><form action="">
                <input type="radio" 
                        checked={item.status==STATUS.URGENT} 
                        onChange={markItem
                                    .bind(null, item.itemId, STATUS.URGENT)}/> 紧急
                <input type="radio" 
                        checked={item.status==STATUS.FINISHED} 
                        onChange={markItem
                                    .bind(null, item.itemId, STATUS.FINISHED)}/> 待提交
                <br />
                <input type="radio" 
                        checked={item.status==STATUS.SUBMITTED} 
                        onChange={markItem
                                    .bind(null, item.itemId, STATUS.SUBMITTED)}/> 已提交
                <input type="radio" 
                        checked={item.status==STATUS.WAITED} 
                        onChange={markItem
                                    .bind(null, item.itemId, STATUS.WAITED)}/> 等待
            </form></td>             
            <td>{item.note}</td>
            <td>
                <button className="btn btn-default btn-sm" 
                        onClick={updateItem.bind(this, item)}>
                修改  </button>
                <br />
                <button className="btn btn-default btn-sm" 
                        onClick={deleteItem.bind(this, item)}>
                删除  </button>
            </td>
        </tr>
    );
  }
}

export default ScheduleItem;
