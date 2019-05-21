import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import cmpFunction, { getCmpFunction } from '../utils';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';


class ScheduleStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  getSchedule(itemId) {
    return this._state.find((item)=>item.itemId == itemId);
  }

  getScheduleIndex(itemId) {
    return this._state.findIndex((item)=>item.itemId == itemId);
  }


  reduce(state, action){

        let itemIndex = null;                       // declaration
        switch (action.type) {
        case constants.FETCH_SCHEDULES_SUCCESS:
            return action.payload.response;
        
        /*
        * Item Creation
        */
        case constants.CREATE_SCHEDULE:
            return update(this.getState(), {$push: [action.payload.item] })

        case constants.CREATE_SCHEDULE_SUCCESS:
            itemIndex = this.getScheduleIndex(action.payload.item.itemId);
            return update(this.getState(), {
            [itemIndex]: {
                itemId: { $set: action.payload.response.itemId }
            }
            });

        case constants.CREATE_SCHEDULE_ERROR:
            itemIndex = this.getScheduleIndex(action.payload.item.itemId);
            return update(this.getState(), { $splice:[[itemIndex, 1]]});

        /*
        * Schedule Update
        */
        case constants.UPDATE_SCHEDULE:
            itemIndex = this.getScheduleIndex(action.payload.item.itemId);
            return update(this.getState(), {
            [itemIndex]: {
                $set: action.payload.draftSchedule
            }
            });

        case constants.UPDATE_SCHEDULE_ERROR:
            itemIndex = this.getScheduleIndex(action.payload.item.itemId);
            return update(this.getState(), {
                [itemIndex]: {
                    $set: action.payload.item
                }
            });


        /*
        * Schedule Deletion
        */
        case constants.DELETE_SCHEDULE:
                itemIndex = this.getScheduleIndex(action.payload.itemId);
                return update(this.getState(), {$splice: [[itemIndex, 1]]});

        case constants.DELETE_SCHEDULE_ERROR:
                itemIndex = this.getScheduleIndex(action.payload.itemId);
                return update(this.getState(), 
                    {$splice: [[action.payload.taskIndex, 0, action.payload.task]] });

        case constants.SORT_SCHEDULE_SUCCESS:
            return action.payload.response;

        /* 
         * default
         */
        default : 
            return state;
    }
  }
}
export default new ScheduleStore(AppDispatcher);
