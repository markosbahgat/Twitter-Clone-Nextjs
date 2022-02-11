import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{username: "Markos Bahgat William", dateCreated:"2020-05-16T19:34", likes: 25},
    reducers:{
        logIn: (state, action) => {
            console.log(state, action)
        },
        logOut: (state, action) => {
            console.log(state, action)

        }
    }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;