import React, { Component } from 'react';
import Consts from './consts';
import update from 'react-addons-update';
import Schedule from './Schedule';

class ScheduleItem extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            draft : this.props.item,
            isChange : false
        };
    }

    modifyItem(item) {
        this.setState( {
            isChange : true
        });
    }

    submitItem() {
        this.setState( {
            isChange : false
        });
        let {item} = this.props;
        let {draft} = this.state;
        console.log(draft);
        let {updateItem} = this.props.itemActions;
        updateItem(item, draft);
    }

    handleChange(target, event) {
        let {name, value} = event.target;
        let {draft} = this.state;
        let newDraft = update(draft, {$merge: {[name] : value}})
        this.setState({ draft : newDraft ,
                        changed : true});
    }

    markItem(value) {
        let {draft} = this.state;
        let newDraft = update(draft, {$merge: {['status'] : value}});
        this.setState({
            draft : newDraft
        });
    }

    render() {
        
        let {draft} = this.state;
        let {STATUS, nameList} = Consts;

        let color = "";
        let showText = "";

        switch(draft.status){
            case STATUS.URGENT: 
                color = "danger";
                showText = "紧急";
                break;
            case STATUS.FINISHED:
                color = "warning";
                showText = "待提交";
                break;
            case STATUS.SUBMITTED:
                color = "success";
                showText = "已提交";
        };
        
        let {deleteItem} = this.props.itemActions;
        let {isChange} = this.state;
        let rtn = null; 
        console.log("ischange : ", isChange)

        if(isChange) {
            rtn = (
                <tr className={color} >
                    {nameList.map((name)=>{
                        if(name==="status")
                            return (
                                <td key={name}><div className="input-group">
                                <input type="radio" 
                                        checked={draft.status==STATUS.URGENT} 
                                        onChange={this.markItem
                                                    .bind(this, STATUS.URGENT)}/> 紧急
                                <br />
                                <input type="radio" 
                                        checked={draft.status==STATUS.FINISHED} 
                                        onChange={this.markItem
                                                    .bind(this, STATUS.FINISHED)}/> 待提交
                                <br />
                                <input type="radio" 
                                        checked={draft.status==STATUS.SUBMITTED} 
                                        onChange={this.markItem
                                                    .bind(this, STATUS.SUBMITTED)}/> 已提交
                                <input type="radio" 
                                        checked={draft.status==STATUS.WAITED} 
                                        onChange={this.markItem
                                                    .bind(this, STATUS.WAITED)}/> 等待
                            </div></td>
                            )
                        else 
                            return (
                                <td key={name}>
                                <input type='text' name={name} value={draft[name]}
                                    onChange={this.handleChange.bind(this, event)}
                                    className="form-control" />                      
                                </td>             
                            );
                    })}
                    <td>
                        <button className="btn btn-default btn-sm" 
                                onClick={this.modifyItem.bind(this, draft)}>
                        修改  </button>
                        <button className="btn btn-default btn-sm" 
                                onClick={this.submitItem.bind(this)}>
                        提交  </button>
                        <br />
                        <button className="btn btn-default btn-sm" 
                                onClick={deleteItem.bind(this, draft)}>
                        删除  </button>
                    </td>
                </tr>
            );
        } else {
            rtn = (
                <tr className={color} >
                <td>{draft.subject}</td>             
                <td>{draft.title}</td>
                <td>{draft.content}</td>
                <td>{draft.issueDate}</td>       
                <td>{draft.dueDate}</td>           
                <td>{draft.finishDate}</td>
                <td>{draft.submitDate}</td>
                <td>{showText}</td>             
                <td>{draft.note}</td>
                <td>
                    <button className="btn btn-default btn-sm" 
                            onClick={this.modifyItem.bind(this, draft)}>
                    修改  </button>
                    <button className="btn btn-default btn-sm" 
                            onClick={this.submitItem.bind(this)}>
                    提交  </button>
                    <br />
                    <button className="btn btn-default btn-sm" 
                            onClick={deleteItem.bind(this, draft)}>
                    删除  </button>
                </td>
            </tr>
            );
        }
        return rtn
    }
}

export default ScheduleItem;
