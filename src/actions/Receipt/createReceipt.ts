import { createAsyncThunk } from "@reduxjs/toolkit";
//import { receiptTp }
import { URLAPI } from "../../configuration/URLConfig";
import { receiptTp } from "../../state/slices/receiptSlice";

const createReceiptAPI = URLAPI + "/create/receipt";

export const createReceipt = createAsyncThunk('createReceipt', async(receipt: receiptTp) => {
    const res = await fetch(createReceiptAPI, {
        method:'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(receipt),
    })
    return (await res.json()) as receiptTp;
})