import React, { createContext, useContext, useReducer } from "react";

const paymentReducer = (state = {}, action) => {
  switch (action.type) {
    case "METER_AMOUNT":
      return (state = { ...state, amount: action.payload + 100 });

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

const PaymentTypeContext = createContext();

const PaymentTypeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, {});
  const value = { state, dispatch };
  return (
    <PaymentTypeContext.Provider value={value}>
      {children}
    </PaymentTypeContext.Provider>
  );
};

const usePaymentType = () => {
  const context = useContext(PaymentTypeContext);
  if (context === undefined) {
    throw new Error(
      "usePaymentType can not be use outside PaymentTypeProvider",
    );
  }
  return context;
};

export { PaymentTypeProvider, usePaymentType };
