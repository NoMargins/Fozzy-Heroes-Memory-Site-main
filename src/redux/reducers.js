// redux/reducers.js
import { combineReducers } from 'redux';
import {
    FETCH_HEROES_REQUEST,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAILURE,
} from './actions';

const initialState = {
    heroes: [],
    loading: false,
    error: null,
};

const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HEROES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_HEROES_SUCCESS:
            return {
                ...state,
                loading: false,
                heroes: action.payload,
            };
        case FETCH_HEROES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    heroes: heroesReducer,
});

export default rootReducer;
