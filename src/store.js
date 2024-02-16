import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
//Classic React using Deprecated createStore

const rootReducer = combineReducers({
    account:accountReducer,
    customer:customerReducer,
});

const store = createStore(rootReducer);


export default store;