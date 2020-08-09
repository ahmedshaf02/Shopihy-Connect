
import {createStore,applyMiddleware,compose,combineReducers} from "redux"
import reducer from "./reducer"
import authReducer from "../Component/Auth/AuthRedux/authReducer"

// export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const thunk = store=>next=>action=>{
  return typeof action ==="function"?action(store.dispatch):next(action)
}

const composeEnhancers =   typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: compose;

const enhancers = composeEnhancers(applyMiddleware(thunk))

const mainReducer = combineReducers({app:reducer,auth:authReducer})

export const store = createStore(mainReducer,enhancers)

console.log(store.getState())