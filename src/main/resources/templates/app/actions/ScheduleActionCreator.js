
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import ScheduleAPI from '../API/ScheduleApi';


let ScheduleActionCreators = {
    fetchSchedules() {
        AppDispatcher.dispatchAsync(ScheduleAPI.fetchSchedules(), {
        request: constants.FETCH_SCHEDULES,
        success: constants.FETCH_SCHEDULES_SUCCESS,
        failure: constants.FETCH_SCHEDULES_ERROR
        });
    },

    addSchedule(item) {
        AppDispatcher.dispatchAsync(ScheduleAPI.addSchedule(item), {
        request: constants.CREATE_SCHEDULE,
        success: constants.CREATE_SCHEDULE_SUCCESS,
        failure: constants.CREATE_SCHEDULE_ERROR
        }, {item});
    },

    updateSchedule(item, draftSchedule) {
        AppDispatcher.dispatchAsync(ScheduleAPI.updateSchedule(item, draftSchedule), {
        request: constants.UPDATE_SCHEDULE,
        success: constants.UPDATE_SCHEDULE_SUCCESS,
        failure: constants.UPDATE_SCHEDULE_ERROR
        }, {item, draftSchedule});
    },

    deleteSchedule(item) {
        AppDispatcher.dispatchAsync(ScheduleAPI.deleteSchedule(item), {
        request: constants.DELETE_SCHEDULE,
        success: constants.DELETE_SCHEDULE_SUCCESS,
        failure: constants.DELETE_SCHEDULE_ERROR
        }, {item});
    },

    sortSchedule(items, keyName) {
        AppDispatcher.dispatchAsync(ScheduleAPI.sortSchedule(items, keyName), {
            request: constants.SORT_SCHEDULE,
            success: constants.SORT_SCHEDULE_SUCCESS,
            failure: constants.SORT_SCHEDULE_ERROR
        });
    }


};

export default ScheduleActionCreators;
