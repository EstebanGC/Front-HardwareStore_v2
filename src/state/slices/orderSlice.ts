import { createSlice } from "@reduxjs/toolkit";
import { productTp } from "./productSlice";

type orderTp = {
    productsSold: productTp[]
}


const initialState: orderTp = {
    productsSold: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct(state,action) {
            state.productsSold.push(action.payload)
        },
        emptyProducts(state) {
            state.productsSold = [ ]
        }
    }
});

export type { orderTp }
export default orderSlice.reducer
export const { addProduct, emptyProducts} = orderSlice.actions;