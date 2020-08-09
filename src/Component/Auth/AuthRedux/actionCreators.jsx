
import {SHOW_SIGNUP_PAGE,SHOW_LOGIN_PAGE,ADMIN_SIGNUP_REQUEST,ADMIN_SIGNUP_SUCCESS,ADMIN_SIGNUP_FAILURE,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE}  from "./actionTypes"
import axios from "axios"


export const showLoginPage = (payload)=>({
  type:SHOW_LOGIN_PAGE,
  payload
  })
  export const showSignupPage = (payload)=>({
  type:SHOW_SIGNUP_PAGE,
  payload
  })

  
export const loginFailure = payload=>({
  type: ADMIN_LOGIN_FAILURE,
  payload:payload
})
export const loginSuccess = (payload,callback)=>({
  type: ADMIN_LOGIN_SUCCESS,
  payload:payload,
})
export const loginRequest = payload=>({
  type: ADMIN_LOGIN_REQUEST,
  payload:payload
})
export const signupFailure = payload=>({
  type: ADMIN_SIGNUP_FAILURE,
  payload:payload
})
export const signupSuccess = (payload,callback)=>({
  type: ADMIN_SIGNUP_SUCCESS,
  payload:payload,
})
export const signupRequest = (payload,callback)=>({
  type: ADMIN_SIGNUP_REQUEST,
  payload:payload,
})

export const validAdminLogin = (payload)=>dispatch=>{
  dispatch(loginRequest())
  return axios.post("http://localhost:8080/auth/login",{
    ...payload
  })
  .then(data=>dispatch(loginSuccess(data)))
  .catch(error=>dispatch(loginFailure(error)))
}


export const validAdminSignup = (payload)=>dispatch=>{
  dispatch(signupRequest())

return axios.post("http://localhost:8080/auth/register",{
  ...payload
})
.then(res=>  dispatch(signupSuccess(res.data)))
.catch(error=>dispatch(signupFailure(error)))

}