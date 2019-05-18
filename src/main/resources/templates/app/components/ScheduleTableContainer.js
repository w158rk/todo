import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch';
import ScheduleTable from './ScheduleTable'

class ScheduleTableContainer extends Component {

    render() {
        const {items, itemActions} = this.props;
        return (
            <div className='container'>
                <ScheduleTable items={items} 
                               itemActions={itemActions} />

            </div>
        );      
    }
}

ScheduleTableContainer.propTypes = {
    items   :   PropTypes.arrayOf(PropTypes.object),
    itemActions :   PropTypes.object
}

export default ScheduleTableContainer;
