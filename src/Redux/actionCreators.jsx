
import {ADD_PRODUCT_DATA,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE, ADD_TO_QTY, SUB_TO_QTY, ADD_TO_CART,ADD_TO_SHOPPING_CART,REMOVE_SHOPPING_CART,ADD_TO_ORDERED,REMOVE_PRODUCT_DATA,MODIFY_PRODUCT_DATA,SUBMIT_MODIFY_DATA,ADD_PRODUCT_CATEGORY, REMOVE_CART_DATA}  from "./actionTypes"
import axios from "axios"

export const addToCart = (payload)=>({
      type:ADD_TO_CART,
      payload
})
export const addToShoppingCart = (payload,callSuccess,callFailure)=>({
      type:ADD_TO_SHOPPING_CART,
      payload,
      callSuccess,
      callFailure
})
export const removeShoppingCart = (payload)=>({
      type:REMOVE_SHOPPING_CART,
      payload
})

export const removeProductData = (payload)=>({
      type:REMOVE_PRODUCT_DATA,
      payload
})
export const modifyProductData = (payload)=>({
      type:MODIFY_PRODUCT_DATA,
      payload
      // payload:{title:payload, status:false,id:uuidv4()}
})
export const submitModifyData = (payload)=>({
      type:SUBMIT_MODIFY_DATA,
      payload:payload
})
export const addProduct = (payload)=>({
      type:ADD_PRODUCT_DATA,
      payload:payload
})
export const addOrderProduct = (payload)=>({
      type:ADD_TO_ORDERED,
      payload:payload
})
export const addCategory = (payload)=>({
      type:ADD_PRODUCT_CATEGORY,
      payload:payload
})
export const removeCart = (payload)=>({
      type:REMOVE_CART_DATA,
      payload:payload
})
export const addToQty = (payload)=>({
      type:ADD_TO_QTY,
      payload:payload
})
export const subToQty = (payload)=>({
      type:SUB_TO_QTY,
      payload:payload
})

export const loginFailure = payload=>({
      type: ADMIN_LOGIN_FAILURE,
      payload:payload
})
export const loginSuccess = payload=>({
      type: ADMIN_LOGIN_SUCCESS,
      payload:payload
})
export const loginRequest = payload=>({
      type: ADMIN_LOGIN_REQUEST,
      payload:payload
})

export const validAdminLogin = payload=>dispatch=>{
      dispatch(loginRequest())
return axios.post("http://localhost:8080/auth/register",{
      ...payload
})
.then(data=>dispatch(loginSuccess(data)))
.catch(error=>dispatch(loginFailure(error)))

}