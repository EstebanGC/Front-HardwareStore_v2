import { createSlice } from "@reduxjs/toolkit";
import { createProvider } from "../../actions/Provider/createProvider";
import { getProviders } from "../../actions/Provider/getProviders";
import { possibleStatus } from "../../configuration/possibleStatus";
import { RootState } from "../store";

type providerTp = {
    id: string, 
    providerName: string,
    email: string,
    passport: string,
}

interface initialStateTp {
    providers: providerTp[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateTp = {
    providers: [],
    status: possibleStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {

        builder.addCase(getProviders.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(getProviders.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
        })

        builder.addCase(getProviders.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are errors when fetching providers"
            state.providers = []
        })

        builder.addCase(createProvider.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })

        builder.addCase(createProvider.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
        })

        builder.addCase(createProvider.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "There are errors when posting a provider"
            state.providers = []
        })
    }
})

export type {providerTp}
export type {initialStateTp}
export default providerSlice.reducer

export const selectProvState = () => (state: RootState) => state.providers.providers
export const selectProvStatus = () => (state:RootState) => state.providers.status
export const selectProvErrorFetch = () => (state:RootState) => state.providers.error