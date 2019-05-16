import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update'

import STATUS from './consts'

class ScheduleForm extends Component {
    
    constructor(props){
        super(props);
        let {targetItem} = this.props;
        console.log(targetItem);
        let item = {
            subject : "",
            title : "",
            content : "",
            issueDate : "",
            dueDate : "",
            finishDate : "",
            submitDate : "",
            status : "",
            note : ""
        };
        if(targetItem !== null) 
            item = targetItem;

        this.state = {
            item: item,
        };
    }
    
    
    handleChange(target, event) {
        let {name, value} = event.target;
        let {item} = this.state;
        let newItem = update(item, {$merge: {[name] : value}})
        this.setState({ item : newItem ,
                        changed : true});
    }
        
    render() {
        
        let {submitAction} = this.props;
        let {item} = this.state;
        let handleChange = this.handleChange;
        
        return (
        <div className="form-horizontal" >
            <div className="form-group">
                <label className="col-sm-2 control-label">科目</label>
                <div className="input-group">
                    <input type='text' name='subject' value={item.subject}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="科目"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">主题</label>
                <div className="input-group">
                    <input type='text' name='title' value={item.title}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="主题"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">内容</label>
                <div className="input-group">
                    <input type='text' name='content' value={item.content}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="内容"/>             
                </div>
            </div>
            <div className="form-group row form-datetime">
                <label className="col-sm-2 col-form-label">布置日期</label>        
                <div className='input-group date col-sm-4' id='datetimepicker1'>
                    <input type='text' className="form-control"  name='issueDate'
                        onChange={handleChange.bind(this, event)} value={item.issueDate}/>
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">截止日期</label>
                <div className="input-group">
                    <input type='text' name='dueDate' value={item.dueDate}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="截止日期"/>             
                </div>
            </div>  
            <div className="form-group">
                <label className="col-sm-2 control-label">完成日期</label>
                <div className="input-group">
                    <input type='text' name='finishDate' value={item.finishDate}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="完成日期"/>             
                </div>
            </div>            
            <div className="form-group">
                <label className="col-sm-2 control-label">提交日期</label>
                <div className="input-group">
                    <input type='text' name='submitDate' value={item.submitDate}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="提交日期"/>             
                </div>
            </div> 
            <div className="form-group">
                <label className="col-sm-2 control-label">状态</label>
                <div className="input-group">            
                    <select name='status' className="form-control" value={item.status}
                            onChange={handleChange.bind(this, event)}>
                        <option value={STATUS.WAITED}> 等待 </option>
                        <option value={STATUS.URGENT}> 紧急 </option>
                        <option value={STATUS.FINISHED}> 待提交 </option>
                        <option value={STATUS.SUBMITTED}> 已提交 </option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">备注</label>
                <div className="input-group">
                    <input type='text' name='note' value={item.note}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="备注"/>             
                </div>
            </div>    
        
            <button className='btn btn-default col-sm-8'onClick={submitAction.bind(null, item)}> 
            提交 
            </button>

        </div>
        );
  }
}

ScheduleForm.propTypes = {
    submitAction   :   PropTypes.func
}

export default ScheduleForm;
