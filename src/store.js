import { configureStore } from "@reduxjs/toolkit";
import allBurgersReducer from './features/allBurgers/allBurgersSlice';
import burgerFinderReducer from './features/burgerFinder/burgerFinderSlice';
import myBurgersReducer from './features/myBurgers/myBurgersSlice';
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";

export default configureStore ({
    reducer: {
        allBurgers: allBurgersReducer,
        myBurgers: myBurgersReducer,
        burgerFinder: burgerFinderReducer,
        shoppingCart: shoppingCartReducer,
    },
});