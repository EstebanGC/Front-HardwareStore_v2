import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerTp } from "../../state/slices/providerSlice";
import { URLAPI } from "../../configuration/URLConfig";

const createProviderAPI = URLAPI + "./create/provider"

export const createProvider = createAsyncThunk('createProvider', async(provider: providerTp) => {
    const res = await fetch(createProviderAPI, {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(provider),
    })
    return (await res.json()) as providerTp;
})