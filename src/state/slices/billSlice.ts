import { createSlice } from "@reduxjs/toolkit";
import { createBill } from "../../actions/Bill/createBill";
import { getBills } from "../../actions/Bill/getBills";
import { possibleStatus } from "../../configuration/possibleStatus";
import { RootState } from "../store";
import { productTp } from "./productSlice";


type billTp = {
    id: string, 
    date: string,
    clientName: string, 
    sellerName: string,
    productsSold: productTp[];
    totalSale: number,
}

interface initialStateTp {
    bills: billTp[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateTp = {
    bills: [],
    status: possibleStatus.IDLE,
    error: null,
}

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(getBills.pending, (state, action) => {
            state.status=possibleStatus.PENDING;
        })

        builder.addCase(getBills.fulfilled, (state,action) => {
            state.status=possibleStatus.COMPLETED;
            state.bills= action.payload;
        })

        builder.addCase(getBills.fulfilled, (state,action) => {
            state.status=possibleStatus.FAILED;
            state.error = "There are errors";
            state.bills=[]
        })

        builder.addCase(createBill.pending, (state, action) => {
            state.status=possibleStatus.PENDING;
        })

        builder.addCase(createBill.fulfilled, (state,action) => {
            state.status=possibleStatus.COMPLETED;
            state.bills= action.payload;
        })

        builder.addCase(createBill.fulfilled, (state,action) => {
            state.status=possibleStatus.FAILED;
            state.error = "There are errors when creating a bill";
            state.bills=[]
        })
    }
})

export type { billTp }
export type { initialStateTp }
export default billSlice.reducer

export const selectBillState = () => (state: RootState) => state.bills.bills
export const selectBillStatus = () => (state: RootState) => state.bills
