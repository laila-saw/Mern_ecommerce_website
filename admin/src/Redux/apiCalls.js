import { publicRequest } from "../requestMethods"
import { loginFailure, loginSatrt, loginSuccess } from "./userRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginSatrt())
    try {
        const res=await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}