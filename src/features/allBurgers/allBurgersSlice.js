import { createSlice } from '@reduxjs/toolkit';
import allBurgersData from '../../data.js';
import { selectBurgerFinder } from '../burgerFinder/burgerFinderSlice';

//Slice Object
export const allBurgersSlice = createSlice({
    name: "allBurgers",
    initialState: [],
    reducers: {
        loadData: (state) => {
            return allBurgersData.map(burger => ({...burger, active : true}));
        },
        addBurger: (state, action) => {
            state.push(action.payload);
            state.sort((a, b) => a.id > b.id ? 1 : -1);
        },
        removeBurger: (state, action) => {
            return state.filter(burger => burger.id !== action.payload.id);
        },
    }
});

//Selectors
export const selectAllBurgers = (state) => state.allBurgers;
export const selectAllBurgersFiltered = (state) => {

    const allBurgers = selectAllBurgers(state);
    const burgerFinder = selectBurgerFinder(state);

    return allBurgers.filter((burger) => 
        burger.name.toLowerCase().includes(burgerFinder.toLowerCase())
    );
    
}

//Exports
export const {
    loadData,
    addBurger,
    removeBurger,
} = allBurgersSlice.actions;

export default allBurgersSlice.reducer;