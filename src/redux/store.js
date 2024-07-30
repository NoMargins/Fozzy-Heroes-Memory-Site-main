import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './heroesSlice';

const store = configureStore({
    reducer: {
        heroes: heroesReducer,
    },
});

export default store;
