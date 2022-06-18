import { createSlice } from "@reduxjs/toolkit";
import { createReceipt } from "../../actions/Receipt/createReceipt";
import { getReceipts } from "../../actions/Receipt/getReceipts";
import { possibleStatus } from "../../configuration/possibleStatus";
import { RootState } from "../store";
import { productTp } from "./productSlice";

type receiptTp = {
    id: string,
    units: number,
    product: productTp,
    date: string,
}

interface initialStateType {
    receipts: receiptTp[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    receipts: [],
    status: possibleStatus.IDLE,
    error: null,
}

const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        
        builder.addCase(getReceipts.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(getReceipts.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.receipts = action.payload;
        })

        builder.addCase(getReceipts.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are errors with receipt fetch";
            state.receipts = []
        })

        builder.addCase(createReceipt.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(createReceipt.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.receipts.push(action.payload);
        })

        builder.addCase(createReceipt.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are errors when creating a receipt";
            state.receipts = []
        })
    }
})

export type { receiptTp}
export type {initialStateType}
export default receiptSlice.reducer

export const selectRecState = () => (state:RootState) => state.receipts.receipts
export const selectRecStats = () => (state:RootState) => state.products.status
export const selectRecErrorFetch = () => (state:RootState) => state.receipts.error