import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import providerReducer from "./slices/providerSlice";
import billReducer from "./slices/billSlice";
import productReducer from "./slices/productSlice";
import receiptReducer from "./slices/receiptSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        providers: providerReducer,
        bills: billReducer,
        products: productReducer,
        receipts: receiptReducer,
        order: orderReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
