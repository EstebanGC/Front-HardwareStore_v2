import { createSlice } from "@reduxjs/toolkit";

export interface userStateTp {
    user: userTp | null
}

export interface userTp {
    displayName?: string
    email?: string
    photoURL?: string
    uid?: string
}

const initialState: userStateTp = {
    user : null
}

const loggedInSlice = createSlice({
    name:'logged',
    initialState,
    reducers: {
        logInInReducer(state,action) {
            const stateLoggedIn = { ...state, user: action.payload}
            return stateLoggedIn
        },
        logOutInReducer() {
            return { user : null }
        }
    }
  }
)
export default loggedInSlice.reducer
export const { logInInReducer, logOutInReducer } = loggedInSlice.actions