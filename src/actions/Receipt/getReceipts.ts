import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptTp } from "../../state/slices/receiptSlice";
import { URLAPI } from "../../configuration/URLConfig";

const getReceiptsAPI = URLAPI + "/getallreceipts"

export const getReceipts = createAsyncThunk('getallreceipts', async() => {
    const res = await fetch(getReceiptsAPI)
    return (await res.json() as receiptTp[])
})