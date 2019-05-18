import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';

import Utils from '../utils';

const API_URL = '/back/schedule';
const API_HEADERS = {
  'Content-Type': 'application/json; charset=UTF-8'
};
const sortArray = function (a, keyName){
    let cmpFunction = Utils.getCmpFunction(keyName);
    let rtn = a.sort(cmpFunction);
    resolve(rtn);
    return promise;
};

let ScheduleAPI = {
    fetchSchedules() {
        return fetch(`${API_URL}`, {headers:API_HEADERS})
        .then((response) => response.json())
    },

    addSchedule(item) {
        return fetch(`${API_URL}/add`, {
        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(item)
        })
        .then((response) => response.json())
    },

    updateSchedule(item, draftSchedule) {
        return fetch(`${API_URL}/update`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify(draftSchedule)
        })
    },

    deleteSchedule(item) {
        return fetch(`${API_URL}/delete`, {
            method: 'delete',
            headers: API_HEADERS,
            body: JSON.stringify(item)
        });
    },

    sortSchedule(items, keyName) {
        // return a function
        var promise = new Promise(function(resolve, reject) {
            let cmpFunction = Utils.getCmpFunction(keyName);
            items.sort(cmpFunction);
            let newItems = items.map((a) => {return a;});
            // 这里有一个神坑， sort函数是在原数组上进行操作的，所以
            // 要想让排序后的数组替换原来数组时是有响应的，那么就要对
            // 原来的数组进行一次拷贝，保证items===newItems = false 
            // 否则对状态更新将不会触发重新渲染
            // console.log("test the unchangablity : ", items===newItems);
            resolve(newItems);
        });
        return promise;
    }

};

export default ScheduleAPI;
