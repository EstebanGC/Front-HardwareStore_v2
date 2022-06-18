import { createSlice } from "@reduxjs/toolkit";
import { productTp } from "./productSlice";

type sellTp = {
    productsSold: productTp[]
}

const initialState: sellTp = {
    productsSold: []
}

const sellSlice=createSlice({
    name:'sell',
    initialState,
    reducers: {
        addProduct(state,action){
            state.productsSold.push(action.payload)
        },
        emptyProducts(state){
            state.productsSold=[]
        }
    }
});

export type { sellTp}
export default sellSlice.reducer
export const {addProduct, emptyProducts} = sellSlice.actions;
