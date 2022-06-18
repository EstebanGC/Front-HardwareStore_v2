import { createAsyncThunk } from "@reduxjs/toolkit";
import { productTp } from "../../state/slices/productSlice";
import { URLAPI } from "../../configuration/URLConfig";

const updateProductAPI = URLAPI + "/update/product";

export const updateProduct = createAsyncThunk('updateProduct', async (product: productTp)=> {
    const res = await fetch(updateProductAPI, {
        method: 'PUT',
        headers: {
            'conten-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await res.json()) as productTp;
})