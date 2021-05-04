import { createSlice, current } from '@reduxjs/toolkit';

//Slice Object
export const myBurgersSlice = createSlice({
    name: "myBurgers",
    initialState: [],
    reducers: {
        removeBurger: (state, action) => {
            return state.filter(burger => burger.id !== action.payload.id);
        },
        addBurger: (state, action) => {
            state.push(action.payload)
        }
    },
    
});

//Selectors
export const selectMyBurgers = (state) => state.myBurgers;

//Exports
export const {
    removeBurger,
    addBurger,
} = myBurgersSlice.actions;

export default myBurgersSlice.reducer;