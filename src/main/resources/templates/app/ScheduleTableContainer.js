import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import 'whatwg-fetch';
import ScheduleTable from './ScheduleTable'
import update from 'react-addons-update';
import findIndex from 'babel-polyfill';

class ScheduleTableContainer extends Component {

    render() {
        const {listItems, itemActions} = this.props;
        return (
            <div className='container'>
                <ScheduleTable listItems={listItems} 
                               itemActions={itemActions} />

            </div>
        );      
    }
}

                // <button className="btn btn-primary btn-lg btn-block" onClick={this.submit.bind(this)}> 
                // 提交
                // </button>

ScheduleTableContainer.propTypes = {
    listItems   :   PropTypes.arrayOf(PropTypes.object),
    itemActions :   PropTypes.object
}

export default ScheduleTableContainer;
