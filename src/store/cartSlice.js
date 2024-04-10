import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
          return  state.push(action.payload);
        },

        deleteToCart: (state, action) => {
            state.filter((item) => {
               return item.id !== action.payload.id
            })
        },

        incrementQuantity: (state, action) => {
            state.map((item) => {
                if(item.id === action.payload.id ){
                    return item.quantity++;
                }
            })
        },

        decrementQuantity: (state, action) => {
            state.map((item) => {
                if(item.id === action.payload.id && item.quantity !== 1){
                    return item.quantity--;
                }
            })
        }
    }
})

export const { addToCart, deleteToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;