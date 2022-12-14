import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers: {
        loginSatrt:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false
            state.currentUser=action.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false
            state.error=true
        },
        logoutSuccess:(state)=>{
            state.currentUser=null
        }
    }
})
export const { loginSatrt, loginSuccess, loginFailure,logoutSuccess} = userSlice.actions
export default userSlice.reducer