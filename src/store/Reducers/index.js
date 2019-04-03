import { combineReducers } from "redux";

import { fetchData, getRequestStatus, loadNextPage } from './reducers';

export default combineReducers({
    fetchData,
    getRequestStatus,
    loadNextPage
});

