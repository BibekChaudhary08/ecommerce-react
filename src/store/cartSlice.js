import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },

        deleteToCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },

        incrementQuantity: (state, action) => {
            state = state.map(item => {
                if(item.id === action.payload){
                    item.quantity++;
                }
            })
        },

        decrementQuantity: (state, action) => {
            state = state.map(item => {
                if(item.id === action.payload && item.quantity !== 1){
                    item.quantity--;
                }
            })
        },
    }
});

export const { addToCart, deleteToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
