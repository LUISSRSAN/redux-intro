import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
//Classic React using Deprecated createStore


configureStore({reducer:{
    account:accountReducer,
    customer:customerReducer,
}})

export default store;