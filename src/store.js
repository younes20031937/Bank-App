import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducers , applyMiddleware(thunk));

export default store;
