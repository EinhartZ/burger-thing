import { createSlice } from '@reduxjs/toolkit';


//Slice Object
export const burgerFinderSlice = createSlice({
    name: "burgerFinder",
    initialState: 'mac',
    reducers: {
        setFinder: (state, action) => {
            return state = action.payload;
        },
    }
});


//Selectors
export const selectBurgerFinder = (state) => state.burgerFinder;

//Exports
export const {
    setFinder,
} = burgerFinderSlice.actions;

export default burgerFinderSlice.reducer;