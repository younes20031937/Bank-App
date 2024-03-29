import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      else
        return {
          ...state,
          balance: state.balance + action.payload.amount,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
        };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducers);
/*
store.dispatch({
  type: "account/deposit",
  payload: 500,
});
console.log(store.getState());

store.dispatch({ type: "account/withraw", payload: 200 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 500, purpose: "Buy a car" },
});
console.log(store.getState());
*/
const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};
const withraw = (amount) => {
  return { type: "account/withraw", payload: amount };
};
const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};
const payLoan = () => {
  return { type: "account/payLoan" };
};

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("Younes ", "BE838383"));
console.log(store.getState()); 

store.dispatch(updateName("Younes Boukdir"))
console.log(store.getState());