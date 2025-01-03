import { createSlice } from "@reduxjs/toolkit";

const initialState={
    formType: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showSignIn: (state) => {
            state.formType = "SignIn";
        },
        showSignUp: (state) => {
            state.formType = "SignUp";
        },
        closeForm: (state) => {
            state.formType = null;
        }
        
    }
})

export const { showSignIn,showSignUp,closeForm } = modalSlice.actions;
export default modalSlice.reducer;
