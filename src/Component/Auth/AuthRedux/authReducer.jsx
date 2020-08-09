

import {SHOW_SIGNUP_PAGE,SHOW_LOGIN_PAGE,ADMIN_SIGNUP_FAILURE,ADMIN_SIGNUP_SUCCESS,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE,}  from "./actionTypes"

export const initState = {
  isLogin:false,
  loginData:{}
}

export default (state=initState, {type,payload})=>{

  switch(type){
      case ADMIN_LOGIN_REQUEST:
        return{
          ...state,
        isLoading:true,
        isError:false,
        isLogin:false
      }
      case ADMIN_LOGIN_SUCCESS:
        return{
          ...state,
          isLoading:false,
          loginData:payload,
          isLogin:true

        }
        
      case ADMIN_LOGIN_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError: true,
          loginData:payload,
          isLogin:false
    }

    case ADMIN_SIGNUP_FAILURE:
      return{
        ...state,
        loginData:payload
  }


    case ADMIN_SIGNUP_SUCCESS:
      return{
        ...state,
        loginData:payload,
  }


    case SHOW_LOGIN_PAGE:
      return{
        ...state,
        showLogin:payload
  }


  
    case SHOW_SIGNUP_PAGE:
      return{
        ...state,
        showLogin:payload
  }
    default:
      return state
  }

}