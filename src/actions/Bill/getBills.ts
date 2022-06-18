import { createAsyncThunk } from "@reduxjs/toolkit";
import { billTp } from "../../state/slices/billSlice";
import { URLAPI } from "../../configuration/URLConfig";

const getBillsAPI = URLAPI + "/create/bill";

export const getBills = createAsyncThunk('createbills', async() => {
    const res = await fetch(getBillsAPI)
    return (await res.json() as billTp[])
})