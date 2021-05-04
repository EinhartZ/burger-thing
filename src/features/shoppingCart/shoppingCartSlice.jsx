import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {},
    reducers: {
        addItem: (state, action) => {
            const {id, name, price} = action.payload; 

            const quantity = state[name] ? state[name].quantity + 1 : 1;

            return { 
                ...state, 
                [name]: {id, price, quantity},
              };
        },
        changeQuantity: (state, action) => {
            const {name, quantity} = action.payload;

            if (quantity <= 0) {
                delete state[name];
            } else {
                const oldItem = state[name];
                const newItem = {
                    ...oldItem,
                    quantity
                };
    
                return {
                    ...state,
                    [name]: newItem
                }
            }

        },
        removeItem: (state, action) => {
            
        },
    }
})

export const selectShoppingCart = (state) => state.shoppingCart;

export const {
    addItem,
    removeItem,
    changeQuantity,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;