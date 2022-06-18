import { createAsyncThunk } from "@reduxjs/toolkit";
import { billTp } from "../state/slices/billSlice";
import { URLAPI } from "../../configuration/URLConfig";

const createBillAPI = URLAPI + "./getallbills";

export const createBill = createAsyncThunk('createBill', async(bill: billTp) =>{
    const res = await fetch(createBillAPI, {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(bill),
    })
    return (await res.json()) as billTp;
})