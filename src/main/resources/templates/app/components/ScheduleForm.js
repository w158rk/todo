import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update'

import Consts from './consts'

class ScheduleForm extends Component {
    
    constructor(props){
        super(props);

        let {STATUS} = Consts;
        let item = {
            subject : "",
            title : "",
            content : "",
            issueDate : "",
            dueDate : "",
            finishDate : "",
            submitDate : "",
            status : STATUS.WAITED,
            note : ""
        };

        this.state = {
            item : item
        }
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
        let {STATUS, nameList, cnNameList} = Consts;
        
        let rtn = nameList.map((name)=>{
            if(name==="status")
                return (
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">状态</label>
                        <div className="input-group col-sm-8">            
                            <select name='status' className="form-control" value={item.status}
                                    onChange={handleChange.bind(this, event)}>
                                <option value={STATUS.WAITED}> 等待 </option>
                                <option value={STATUS.URGENT}> 紧急 </option>
                                <option value={STATUS.FINISHED}> 待提交 </option>
                                <option value={STATUS.SUBMITTED}> 已提交 </option>
                            </select>
                        </div>
                    </div>
                )
            else 
                return (
                    <div className="form-group row form-datetime">
                        <label className="col-sm-2 col-form-label">{cnNameList[name]}</label>        
                        <div className='input-group col-sm-8'>
                            <input type='text' className="form-control"  name={name}
                                onChange={handleChange.bind(this, event)} value={item[name]}/>
                            {/*<span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                            </span>*/}
                        </div>
                    </div>
                );
        });
        
        return (
        <div className="form-horizontal" >
            {rtn}
            <button className='btn btn-default col-sm-10' onClick={submitAction.bind(null, item)}> 
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
