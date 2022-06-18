import { createAsyncThunk }  from "@reduxjs/toolkit";
import { productTp  } from "../../state/slices/productSlice";
import { URLAPI } from "../../configuration/URLConfig";

const deleteProductAPI = URLAPI + "/delete/product";

export const deleteProduct = createAsyncThunk('deleteProduct', async(product: productTp) =>{
    const res = await fetch(`${deleteProductAPI}/${product.id}`, {
        method: 'DELETE'
    })
    return {deleted: res.ok, productId: product.id}
} )