import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../../actions/Product/createProduct";
import { getProducts } from "../../actions/Product/getProduct";
import { possibleStatus } from "../../configuration/possibleStatus";
import { RootState } from "../store";
import { providerTp } from "./providerSlice";
import { updateProduct}  from "../../actions/Product/updateProduct";
import { deleteProduct } from "../../actions/Product/deleteProduct";

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

        builder.addCase(createProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are errors when creating a product";
            state.products = []
        })

        builder.addCase(updateProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING
        })
        
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED
            let productUpdated = state.products.map(product => product.id===action.payload.id?action.payload:product);
            state.products = productUpdated
        })

        builder.addCase(updateProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED
            state.error = "There are errors when updating a product"
        })
        
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            if (action.payload.deleted) {
                state.products = state.products.filter((product) => 
                product.id !== action.payload.productId)
            }
        })

        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong deleting the product provider";
        })
    }
})

export type { productTp}
export type { initialStateType}
export default productSlice.reducer

export const selectProdState = () => (state: RootState) => state.products.products
export const selectProdStatus = () => (state: RootState) => state.products.status
export const selectProdErrorFetch = () => (state: RootState) => state.products.error
