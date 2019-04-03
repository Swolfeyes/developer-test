import { REQUEST_FAIL, REQUEST_LOADING, REQUEST_SUCCESS, FETCH_ARTICLES, LOAD_MORE_ARTICLES } from '../constants';  

export const fetchData = ( state = [], action ) => {
  switch(action.type) {
      case FETCH_ARTICLES:
      case REQUEST_SUCCESS:
        return [ ...state, ...action.payload.articles ]; break;
      default:  
        return state; break;
  }
}

export const getRequestStatus = ( state = {}, action ) => {
  switch(action.type) {
    case REQUEST_FAIL:
    case REQUEST_LOADING:
    case REQUEST_SUCCESS:
    return { ...state, ...action.payload }; break;
    default:
      return state; break;
  }
}

export const loadNextPage = ( state = 1, action ) => {
  switch(action.type) {
    case LOAD_MORE_ARTICLES:
      return action.payload.page; break;
    default: 
      return state; break;
  }
}