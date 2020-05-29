
import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducer"

// export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const thunk = store=>next=>action=>{
  return typeof action ==="function"?action(store.dispatch):next(action)
}

const composeEnhancers =   typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: compose;

const enhancers = composeEnhancers(applyMiddleware(thunk))



export const store = createStore(reducer,enhancers)