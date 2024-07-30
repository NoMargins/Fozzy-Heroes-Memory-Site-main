import { fetchHeroes } from '../utils/api';

export const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE';

export const fetchHeroesRequest = () => ({
    type: FETCH_HEROES_REQUEST,
});

export const fetchHeroesSuccess = (heroes) => ({
    type: FETCH_HEROES_SUCCESS,
    payload: heroes,
});

export const fetchHeroesFailure = (error) => ({
    type: FETCH_HEROES_FAILURE,
    payload: error,
});

export const fetchHeroesData = () => {
    return async (dispatch) => {
        dispatch(fetchHeroesRequest());
        try {
            const heroes = await fetchHeroes();
            dispatch(fetchHeroesSuccess(heroes));
        } catch (error) {
            dispatch(fetchHeroesFailure(error));
        }
    };
};
