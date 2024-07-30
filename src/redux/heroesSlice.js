import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { fetchHeroes, fetchHeroById } from '../utils/api';

export const fetchHeroesAsync = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const response = await fetchHeroes();
        return response;
    }
);

export const fetchHeroByIdAsync = createAsyncThunk(
    'heroes/fetchHeroById',
    async (id) => {
        const response = await fetchHeroById(id);
        return response;
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: {
        heroes: [],
        hero: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHeroesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchHeroByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHeroByIdAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hero = action.payload;
            })
            .addCase(fetchHeroByIdAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectHeroById = (state, id) => state.heroes.heroes.find(hero => hero.id === id);

export const selectSimilarHeroes = createSelector(
    [state => state.heroes.heroes, (state, id) => id],
    (heroes, id) => {
        const hero = heroes.find(hero => hero.id === id);
        return hero ? heroes.filter(h => h.id !== id && h.business === hero.business) : [];
    }
);

export default heroesSlice.reducer;
