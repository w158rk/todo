import React, { Component, PropTypes } from 'react';

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
        this.setState({ item : {[name]: value },
                        changed : true});
    }
        
    render() {
        
        let {submitAction} = this.props;
        let {item} = this.state;
        let handleChange = this.handleChange;
        
        return (
        <form className="form-horizontal" onSubmit={submitAction.bind(null, item)}>
            <div className="form-group">
                <label className="col-sm-2 control-label">科目</label>
                <div className="col-sm-10">
                    <input type='text' name='subject' value={item.subject}
                        onChange={handleChange.bind(this, event)}
                        className="form-control" placeholder="科目"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">主题</label>
                <div className="col-sm-10">
                    <input type='text' name='title' value={item.title}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="主题"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">内容</label>
                <div className="col-sm-10">
                    <input type='text' name='content' value={item.content}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="内容"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">布置日期</label>
                <div className="col-sm-10">
                    <input type='text' name='issueDate' value={item.issueDate}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="布置日期"/>             
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">截止日期</label>
                <div className="col-sm-10">
                    <input type='text' name='dueDate' value={item.dueDate}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="截止日期"/>             
                </div>
            </div>  
            <div className="form-group">
                <label className="col-sm-2 control-label">完成日期</label>
                <div className="col-sm-10">
                    <input type='text' name='finishDate' value={item.finishDate}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="完成日期"/>             
                </div>
            </div>            
            <div className="form-group">
                <label className="col-sm-2 control-label">提交日期</label>
                <div className="col-sm-10">
                    <input type='text' name='submitDate' value={item.submitDate}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="提交日期"/>             
                </div>
            </div> 
            <div className="form-group">
                <label className="col-sm-2 control-label">状态</label>
                <div className="col-sm-10">            
                    <select name='status' className="form-control" value={item.status}
                            onChange={(name,value)=>this.handleChange}>
                        <option value={STATUS.WAITED}> 等待 </option>
                        <option value={STATUS.URGENT}> 紧急 </option>
                        <option value={STATUS.FINISHED}> 待提交 </option>
                        <option value={STATUS.SUBMITTED}> 已提交 </option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">备注</label>
                <div className="col-sm-10">
                    <input type='text' name='note' value={item.note}
                        onChange={(name,value)=>this.handleChange}
                        className="form-control" placeholder="备注"/>             
                </div>
            </div>                        
            <input type='submit' className='btn btn-default btn-block'/>
        </form>
        );
  }
}

ScheduleForm.propTypes = {
    submitAction   :   PropTypes.func
}

export default ScheduleForm;
