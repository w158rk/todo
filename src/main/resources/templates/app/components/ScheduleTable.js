import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

import ScheduleItem from './ScheduleItem';

class ScheduleTable extends Component {
  
  constructor(props) {
      super(props);
  }
  
  render() {
              
    let listItems = this.props.items.map((item) => (
        <ScheduleItem key={item.itemId} item={item} itemActions={this.props.itemActions}/>
    ));
    
    let {sortItems} = this.props.itemActions;

    return (
    <table className='table table-bordered'>
        <thead>
        <tr>
            <th key='subject' onDoubleClick={sortItems.bind(this, 'subject')} >科目</th>             
            <th key='title'>主题</th>
            <th key='content'>内容</th>
            <th key='issueDate'>布置日期</th>       
            <th key='dueDate' onDoubleClick={sortItems.bind(this, 'dueDate')}>截止日期</th>           
            <th key='finishDate'>完成日期</th>
            <th key='submitDate'>提交日期</th>
            <th key='status' onDoubleClick={sortItems.bind(null, 'status')}>状态</th>             
            <th key='note'>备注</th>
            <th key='option'>操作</th>
        </tr>
        </thead>
        <tbody>
        {listItems}
        </tbody>
    </table>
    );
  }
}

ScheduleTable.propTypes = {
    listItems   :   PropTypes.arrayOf(PropTypes.object),
    itemActions :   PropTypes.object
}

export default ScheduleTable;
