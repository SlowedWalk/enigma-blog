import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, accessToken: null },
    reducers: {
        setCredentials(state, action) {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        logOut(state) {
            state.user = null;
            state.accessToken = null;
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.accessToken;