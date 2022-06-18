import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerTp } from "../../state/slices/providerSlice";
import { URLAPI } from "../../configuration/URLConfig";


const getProvidersAPI = URLAPI + "/getallproviders";

export const getProviders = createAsyncThunk('getallproviders', async() => {
    const res = await fetch(getProvidersAPI)
    return (await res.json() as providerTp[])
})