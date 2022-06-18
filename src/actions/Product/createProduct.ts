import { createAsyncThunk } from "@reduxjs/toolkit";
import { productTp } from "../../state/slices/productSlice";
import { URLAPI } from "../../configuration/URLConfig";


const createProductAPI = URLAPI + "./create/product";

export const createProduct = createAsyncThunk('createProduct', async(product: productTp) => {
    const res = await fetch(createProductAPI, {
        method: 'POST',
        headers:  {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await res.json()) as productTp;
})