import React, { Component } from 'react';
// import { Link } from 'react-router';
import 'whatwg-fetch';
import ScheduleForm from './ScheduleForm'

class ScheduleFormContainer extends Component {
    // constructor(){
        // super();
        // this.state = {
            // data: []
        // };
    // }
  

  
    render() {
        let {submitAction, targetItem} = this.props;
        return (
            <ScheduleForm targetItem={targetItem} submitAction={submitAction} /> 
        );      
      }
}

export default ScheduleFormContainer;
