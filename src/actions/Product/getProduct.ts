import { createAsyncThunk } from "@reduxjs/toolkit";
import { productTp } from "../../state/slices/productSlice";
import { URLAPI } from "../../configuration/URLConfig";

const getProductsAPI = URLAPI + "/getallproducts";

export const getProducts = createAsyncThunk('getallproducts', async() => {
    const res = await fetch(getProductsAPI)
    return (await res.json() as productTp[])
})