import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../actions/"
import { MOVIE_DATA_AVAILABLE } from "../actions/"
import { LOGIN_REQUEST } from '../actions/index'
import { TAB_CHILD_ONE } from '../actions/index'
import { TAB_CHILD_TWO } from '../actions/index'
import { TAB_BACK } from '../actions/index'

let dataState = {
    data: [],
    loading: true,
    checkString: 'Pass Value from Reducer',
    tabChild: 'Logistic',
    tabChildSecond: 'Logistic'
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:

            state = Object.assign({}, state, {
                data: action.data,
                loading: false
            });

            return state;
        case MOVIE_DATA_AVAILABLE:

            state = Object.assign({}, state, {
                data: [...state.data, ...action.data],
                loading: false
            });

            return state;
        case LOGIN_REQUEST:

            state = Object.assign({}, state, {
                checkString: action.checkString
            });

            return state;
        case TAB_CHILD_ONE:

            state = Object.assign({}, state, {
                tabChild: action.tabChild
            });

            return state;
        case TAB_CHILD_TWO:

            state = Object.assign({}, state, {
                tabChildSecond: action.tabChildSecond
            });

            return state;
     
        default:

            return state;
    }
};


const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;