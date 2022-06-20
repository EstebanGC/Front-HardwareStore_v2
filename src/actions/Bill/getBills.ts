import { createAsyncThunk } from "@reduxjs/toolkit";
import { billTp } from "../../state/slices/billSlice";
import { URLAPI } from "../../configuration/URLConfig";

const getBillsAPI = URLAPI + "/getallbills";

export const getBills = createAsyncThunk('getallbills', async() => {
    const res = await fetch(getBillsAPI)
    return (await res.json() as billTp[])
})