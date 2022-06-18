import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../../actions/Product/createProduct";
import { getProducts } from "../../actions/Product/getProduct";
import { possibleStatus } from "../../configuration/possibleStatus";
import { RootState } from "../store";
import { providerTp } from "./providerSlice";

type productTp = {
    id:string,
    productName: string,
    productPrice: number,
    productDescription: string, 
    sold: number,
    minUnits: number,
    maxUnits: number,
    availableUnits: number,
    providers: providerTp;
}

interface initialStateType {
    products: productTp[],
    status: possibleStatus,
    error: string |  null,
}

const initialState: initialStateType = {
    products: [],
    status: possibleStatus.IDLE,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder.addCase(getProducts.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.products = action.payload;    
        })

        builder.addCase(getProducts.rejected, (state,action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are error with product fetch";
            state.products = []
        })

        builder.addCase(createProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.products.push(action.payload);    
        })

        builder.addCase(createProduct.rejected, (state,action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are when creatig a product";
            state.products = []
        })
    }
})

export type { productTp}
export type { initialStateType}
export default productSlice.reducer

export const selectProdState = () => (state: RootState) => state.products.products
export const selectProdStatus = () => (state: RootState) => state.products.status
export const selectProdErrorFetch = () => (state: RootState) => state.products.error
