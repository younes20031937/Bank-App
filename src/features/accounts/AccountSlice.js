const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
export default function accountReducer(state = initialStateAccount, action) {
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

export const deposit = (amount , currency) => {
  return { type: "account/deposit", payload: amount };
};
export const withraw = (amount) => {
  return { type: "account/withraw", payload: amount };
};
export const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};
export const payLoan = () => {
  return { type: "account/payLoan" };
};

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
/*
store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
*/