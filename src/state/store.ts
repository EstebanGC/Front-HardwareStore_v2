import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import providerReducer from "./slices/providerSlice";
import billReducer from "./slices/billSlice";
import productReducer from "./slices/productSlice";
import receiptReducer from "./slices/receiptSlice";
import sellReducer from "./slices/sellSlice";
import logInInReducer from "./slices/loggeInSlice";

export const store = configureStore({
    reducer: {
        providers: providerReducer,
        bills: billReducer,
        products: productReducer,
        receipts: receiptReducer,
        sell: sellReducer,
        logging: logInInReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
