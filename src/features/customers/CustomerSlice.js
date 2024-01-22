const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export { createCustomer };

/*
store.dispatch(createCustomer("Younes ", "BE838383"));
console.log(store.getState());

store.dispatch(updateName("Younes Boukdir"));
console.log(store.getState());
*/