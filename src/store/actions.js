import { REQUEST_FAIL, REQUEST_SUCCESS, REQUEST_LOADING, LOAD_MORE_ARTICLES } from './constants.js';

export const handleRequestFail = (error) => {
    return {
        type: REQUEST_FAIL,
        payload: {
            status: 'failed',
            error,
        }
    }
}

export const handleRequestLoading = () => {
    return {
        type: REQUEST_LOADING,
        payload: {
            status: 'loading',
        }
    }
}

export const handleRequestSuccess = (articles) => {
    return {
        type: REQUEST_SUCCESS,
        payload: {
            status: 'success',
            articles,
        }
    }
}

export const loadMoreArticles = (page) => {
    return {
        type: LOAD_MORE_ARTICLES,
        payload: {
            page,
        }
    }
}

export const fetchArticles = (page) => {
    return dispatch => {
        if(page <= 1) {
            dispatch(handleRequestLoading());
        }

        fetch(`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=b851d5b44aec4465b09e99898dc73379&page=${page}`) 
            .then(response => response.json())
            .then(response => {
                response.status !== 'ok'
                ? dispatch(handleRequestFail(response.message))
                : dispatch(handleRequestSuccess(response.articles))
                })
            .catch(err => dispatch(handleRequestFail(err.message)))
    }
}