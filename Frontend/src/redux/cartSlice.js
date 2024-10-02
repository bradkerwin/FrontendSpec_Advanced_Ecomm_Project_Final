import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../Components/Products";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        items: JSON.parse(sessionStorage.getItem("shoppingCart")) || [],

    },

    reducers: {
        addItem: (state, action) => {
            const product = action.payload
            
            const myProduct = state.items.find(item => item.id === product.id)

            if (myProduct) {
                myProduct.quantity += 1
            } else {
                state.items.push({...product, quantity: 1})
            }
            state.totalItems += 1
        },

        removeItem: (state, action) => {
            const product = action.payload
            
            const myProduct = state.items.find(item => item.id === product.id)

            if (myProduct) {
                myProduct.quantity -= 1
            } 
            if (myProduct.quantity === 0) {
                state.items = state.items.filter(item => item.id !== product.id)
            }
            state.totalItems -= 1
        },

        checkout: (state) => {
            state.items = []
            state.totalItems = 0
        }
    }
})

export const { addItem, removeItem, checkout } = cartSlice.actions

export default cartSlice.reducer